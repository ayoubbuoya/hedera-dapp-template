// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {Storage} from "../src/Storage.sol";

contract StorageTest is Test {
    Storage public storageContract;

    function setUp() public {
        storageContract = new Storage();
    }

    function testGetNameEmpty() public view {
        assertEq(storageContract.getName(address(this)), "");
    }

    function testSetName() public {
        storageContract.setName("Alice");
        assertEq(storageContract.getName(address(this)), "Alice");
    }
}
