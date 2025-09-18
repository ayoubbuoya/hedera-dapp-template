// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Storage {
    /// @dev Mapping to store names associated with addresses
    mapping(address => string) private addressName;

    /// @dev Sets the name for the caller's address
    function setName(string memory name) public {
        addressName[msg.sender] = name;
    }

    /// @dev Retrieves the name associated with a given address
    function getName(address user) public view returns (string memory) {
        return addressName[user];
    }
}
