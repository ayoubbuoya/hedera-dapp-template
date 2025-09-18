// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {Storage} from "../src/Storage.sol";
import {console} from "forge-std/console.sol";

contract StorageScript is Script {
    Storage public storageContract;

    function setUp() public {}

    function run() public {
        uint256 pk = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(pk);

        storageContract = new Storage();

        vm.stopBroadcast();

        console.log("Storage Deployed at :", address(storageContract));
    }
}
