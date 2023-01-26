// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

interface IERC165 {
    function supportsInterface(bytes4 interfaceId) external pure returns (bool);
}

interface IERC721 is IERC165 {
    event TransferEvent(address indexed from, address indexed to, uint256 indexed tokenId);
    event ApprovalEvent(address indexed owner, address indexed to, uint256 indexed tokenId);
    event ApprovalForAllEVent(address indexed owner, address indexed operator, bool approved);

    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external;

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function approval(address to, uint256 tokenId) external;

    function setApprovalForAll(address operator, bool approved) external;

    function getApproved(uint256 tokenId) external view returns (address operator);

    function isApprovalForAll(address owner, address operator) external view returns (bool);
}

interface IERC721Receiver {
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4);
}

interface IERC721Metadata is IERC721 {
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function tokenURI(uint256 tokenId) external view returns (string memory);
}

abstract contract ERC721 is IERC721Metadata {
    using Address for address;
    using Strings for uint256;

    // token 名称
    string public override name;
    // token 标志
    string public override symbol;
    // token 到 owner address 的持有人映射
    mapping(uint256 => address) private _owners;
    // address 到持仓数量的持仓量映射
    mapping(address => uint256) private _balances;
    // tokenId 到授权地址的映射
    mapping(uint256 => address) private _tokenApprovals;
    // owner 到 operator 地址的批量授权映射
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    // 构造函数，初始化 name 和 symbol
    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    // 实现 IERC65 接口 supportsInterface
    function supportsInterface(bytes4 interfaceId) external pure virtual override(IERC165) returns (bool) {
        return interfaceId == type(IERC721).interfaceId 
            || interfaceId == type(IERC165).interfaceId 
            || interfaceId == type(IERC721Metadata).interfaceId;
    }

    function balanceOf(address owner) external view virtual override returns (uint256) {
        require(owner != address(0), "owner = zero address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view virtual override  returns (address owner) {
        owner = _owners[tokenId];
        require(owner != address(0), "token not exist");
        // return owner;
    }

    // 查询 owner 地址是否将所持有 NFT 批量授权给 operator 地址
    function isApprovalForAll(address owner, address operator) external view virtual override returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    // 将所有代币全部授权给 operator 地址
    function setApprovalForAll(address operator, bool approved) external virtual override {
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAllEVent(msg.sender, operator, approved);
    }

    // 查询 tokenId 的授权地址
    function getApproved(uint256 tokenId) external view virtual override returns (address) {
        require(_owners[tokenId] != address(0), "token doesn't exist");
        return _tokenApprovals[tokenId];
    }

    // 授权函数，将 tokenId 授权给 to 地址
    function _approval(
        address owner,
        address to,
        uint256 tokenId
    ) private {
        _tokenApprovals[tokenId] = to;
        emit ApprovalEvent(owner, to, tokenId);
    }

    function approval(address to, uint256 tokenId) external virtual override {
        address owner = _owners[tokenId];
        require(msg.sender == owner || _operatorApprovals[owner][msg.sender], "not owner nor approved for all");
        _approval(owner, to, tokenId);
    }

    // 转账函数，通过 _balances 和 _owner 变量将 tokenId 从 from 转账给 to，同时释放 Transfer 事件
    // 条件：
    // token 不被 from 拥有
    // to 不是 0 地址
    function _transfer(
        address owner,
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {
        require(from == owner, "not owner");
        require(to != address(0), "transfer to the zero address");

        _approval(owner, to, tokenId);

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit TransferEvent(from, to, tokenId);
    }

    // 实现 ERC721 的 transferFrom，非安全转账。
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external virtual override {
        address _owner = ownerOf(tokenId);
        require(_isApprovedOrOwner(_owner, msg.sender, tokenId), "not _owner nor approved");
        _transfer(_owner, from, to, tokenId);
    }

    // 安全转账，安全的将 tokenId 从 from 转移到 to
    function _safeTransfer(
        address owner,
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) private {
        _transfer(owner, from, to, tokenId);
        require(_checkOnERC721Received(from, to, tokenId, _data), "not ERC721Receiver");
    }

    // safeTransfersFrom
    function safeTransferFrom(address from, address to, uint tokenId, bytes memory _data) public virtual override {
        address owner = ownerOf(tokenId);
        require(_isApprovedOrOwner(owner, msg.sender, tokenId), "not owner nor approved");
        _safeTransfer(owner, from, to, tokenId, _data);
    }

   function safeTransferFrom(address from, address to, uint256 tokenId) external virtual override { 
        safeTransferFrom(from, to, tokenId, ''); 
   }

   function _mint(address to, uint tokenId) internal virtual {
    require(to != address(0), "mint to zero address");
    require(_owners[tokenId] == address(0), "token already minted");

    _balances[to] +=1;
    _owners[tokenId] = to;

    emit TransferEvent(address(0), to, tokenId);
   }

   function _burn (uint tokenId) internal virtual {
    address owner = ownerOf(tokenId);
    require(msg.sender == owner, "not owner of token");

    _approval(owner, address(0), tokenId);
    _balances[owner] -= 1;
    delete _owners[tokenId];
    
    emit TransferEvent(owner, address(0), tokenId);
   }

    // 查询 spender 地址是否可以使用 tokenId
    function _isApprovedOrOwner(
        address owner,
        address spender,
        uint256 tokenId
    ) private view returns (bool) {
        return (spender == owner || _tokenApprovals[tokenId] == spender || _operatorApprovals[owner][spender]);
    }

    function _checkOnERC721Received(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) private returns (bool) {
         if (to.isContract()) {
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, _data) returns (bytes4 retval) {
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert("ERC721: transfer to non ERC721Receiver implementer");
                } else {
                    /// @solidity memory-safe-assembly
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }

    function tokenURI(uint256 tokenId) external view virtual override returns (string memory) {
        return '';
    }
}
