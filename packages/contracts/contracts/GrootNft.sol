// SPDX-License-Identifier: MIT;
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

interface IERC165 {
    function supportsInterface(bytes4 interfaceId) external pure override returns (bool);
}

interface IERC721 is IERC165 {
    event TransferEvent(address indexed from, address indexed to, uint256 indexed tokenId);
    event ApprovalEvent(address indexed owner, address indexed to, uint256 indexed tokenId);
    event ApprovalForAllEVent(address indexed owner, address indexed operator, bool approved);

    function balanceOf(address owner) external view returns (uint256 balance);

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    function transferFrom(address from, address to, uint256 tokenId) external;

    function approval(address to, uint256 tokenId) external;

    function setApprovalForAll(address operator, bool approved) external;

    function getApproved(uint256 tokenId) external view returns (address operator);

    function isApprovalForAll(address owner, address operator) external view returns (bool);
}

interface IERC721Receiver {
    function onERC721Received(address operator, address from, uint tokenId, bytes calldata data) external returns (bytes4);
}

interface IERC721Metadata is IERC721Receiver, IERC721 {
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function tokenURI(uint256 tokenId) external view returns (string memory);
}

contract ERC721 is IERC721Metadata {
    using Address for address;
    using String for uint256;

    // token 名称
    string public override name;
    // token 标志
    string public override symbol;
    // token 到 owner address 的持有人映射
    mapping(uint => address) private _owners;
    // address 到持仓数量的持仓量映射
    mapping(address => uint) private _balances;
    // tokenId 到授权地址的映射
    mapping(uint => address) private _tokenApprovals;
    // owner 到 operator 地址的批量授权映射
    mapping(address => mapping(address => bool)) private _operatorApprovals;


    // 构造函数，初始化 name 和 symbol
    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    // 实现 IERC65 接口 supportsInterface
    function supportsInterface(bytes4 interfaceId) external pure override returns (bool){
        return interfaceId == type(IERC721).interfaceId ||
        interfaceId == type(IERC165).interfaceId ||
        interfaceId == type(IERC721Metadata).interfaceId;
    }

    function balanceOf(address owner) external view override returns (uint) {
        require(owner != address(0), "owner = zero address");
        return _balances[owner];
    }

    function ownerOf(uint tokenId) external view override returns (address owner) {
        owner = _owners[tokenId];
        return (owner != address(0), "token does't exist");
    }

    // 查询 owner 地址是否将所持有 NFT 批量授权给 operator 地址
    function isApprovedForAll(address owner, address operator) external view override returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    // 将所有代币全部授权给 operator 地址
    function setApprovalForAll(address operator, bool approved) external override {
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAllEVent(msg.sender, operator, approved);
    }

    // 查询 tokenId 的授权地址
    function getApproved(uint tokenId) external view override returns (address) {
        require(_owners[tokenId] != address(0), "token doesn't exist");
        return _tokenApprovals[tokenId];
    }

    // 授权函数，将 tokenId 授权给 to 地址
    function _approval(address owner, address to, uint tokenId) private {
        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    function approval(address to, uint tokenId) external override {
        address owner = _owners[tokenId];
        require(msg.sender == owner || _operatorApprovals[owner][msg.sender], "not owner nor approved for all");
        _approval(owner, to, tokenId);
    }

    // 转账函数，通过 _balances 和 _owner 变量将 tokenId 从 from 转账给 to，同时释放 Transfer 事件
    // 条件：
    // token 不被 from 拥有
    // to 不是 0 地址
    function _transfer(address owner, address from, address to, uint tokenId) external override {
        require(from == owner, "not owner");
        require(to != address(0), "transfer to the zero address");

        _approval(owner, to, tokenId);

        _balances[from] -=1;
        _balances[to] += 1;
        _owner[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    // 实现 ERC721 的 transferFrom， 非安全转账。
    function transferFrom(address from, address to, uint tokenId) external override {
        address owner = ownerOf(tokenId);
        require(_isApprovedOrOwner(owner, msg.sender, tokenId), "not owner nor approved");
    }

    // 安全转账，安全的将 tokenId 从 from 转移到 to
    function _safeTransfer(address owner, address from, address to, uint tokenId, bytes memory _data) private {
        require(_checkOnERC721Received(from, to, tokenId, _data), "not ERC721Receiver");
        _transfer(owner, from, to, tokenId);
    }

    // 查询 spender 地址是否可以使用 tokenId
    function _isApprovedOrOwner(address owner, address spender, uint tokenId) private view returns(bool) {
        return (spender == owner || _tokenApprovals[tokenId] == spender || _operatorApprovals[owner][msg.sender] == spender);
    }

    function _checkOnERC721Received(address from, address to, uint tokenId, bytes memory _data) private returns (bool) {if (to.isContract()) {
        return IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, _data) == IERC721Receiver.onERC721Received.selector;
    } else {
        return true;
    }
    }
}