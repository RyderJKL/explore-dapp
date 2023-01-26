// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "./GrootNft.sol";

contract OJONFT is ERC721 {
    uint256 public MAX_OJO = 10000;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}

    function tokenURI() public view returns (string memory) {
        return "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/";
    }

    function mint(address to, uint256 tokenId) external {
        require(tokenId >= 0 && tokenId < MAX_OJO, "tokenId out of range");
        _mint(to, tokenId);
    }
}
