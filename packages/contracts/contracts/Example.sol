// SPDX-License-Identifier: MIT

pragma solidity  ^0.8.0;

contract Example {
    event Return(uint256);

    uint256 accum = 0;

    function increment () public returns (uint256 sum) {
        accum += 1;
        emit Return(accum);
        return accum;
    }
}