// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Account {
    uint256 public count = 0;

    struct Contact {
        uint256 id;
        string name;
        string phone;
    }

    constructor() {
        createContact("John", "1234567890");
    }

    mapping(uint256 => Contact) public contacts;

    function createContact(string memory _name, string memory _phone) public {
        count++;
        contacts[count] = Contact(count, _name, _phone);
    }
}
