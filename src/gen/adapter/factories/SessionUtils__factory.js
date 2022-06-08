"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SessionUtils__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_oldNonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_newNonce",
                type: "uint256"
            },
        ],
        name: "GapNonceChange",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
        ],
        name: "ResetNonce",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_nonce",
                type: "uint256"
            },
        ],
        name: "requireSessionNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610461806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638853baa014610030575b600080fd5b61004361003e3660046103e9565b610045565b005b6100637396f7fef04d2478e2b011c3aca79dc5a83b5d37ef826101ac565b6100807396f7fef04d2478e2b011c3aca79dc5a83b5d37ef6102d8565b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f783649a600000000000000000000000000000000000000000000000000000000600482015230906301ffc9a790602401602060405180830381865afa1580156100f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101189190610402565b6101a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f53657373696f6e5574696c73237265717569726553657373696f6e4e6f6e636560448201527f3a2057414c4c45545f4e4f545f5550475241444544000000000000000000000060648201526084015b60405180910390fd5b50565b60006101b783610359565b9050808211610248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4761704e6f6e63655574696c73235f726571756972654761704e6f6e63653a2060448201527f494e56414c49445f4e4f4e43450000000000000000000000000000000000000060648201526084016101a0565b604080517f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe60208083019190915281830186905282518083038401815260608301808552815191909201208590558590526080810183905260a0810184905290517fd9aa9f0269d7ebe0e495362c56c21163d40a52f13ad524fb0e844ff41811f0529181900360c00190a1505050565b604080517f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e60208083019190915281830184905282518083038401815260608301808552815191909201206000905583905290517f464865b330cd819e8c8704ad98a40b0c5049a03268c9946629fa5dcd6babf09f9181900360800190a150565b60006103857f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe8361038b565b92915050565b60008083836040516020016103aa929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b6000602082840312156103fb57600080fd5b5035919050565b60006020828403121561041457600080fd5b8151801515811461042457600080fd5b939250505056fea26469706673582212203d75a947df350b6e2a388d011c85afcd8ea0879a6538e7abd1ecebf75f84ca8864736f6c634300080e0033";
var SessionUtils__factory = /** @class */ (function (_super) {
    __extends(SessionUtils__factory, _super);
    function SessionUtils__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    SessionUtils__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SessionUtils__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SessionUtils__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SessionUtils__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SessionUtils__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SessionUtils__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SessionUtils__factory.bytecode = _bytecode;
    SessionUtils__factory.abi = _abi;
    return SessionUtils__factory;
}(ethers_1.ContractFactory));
exports.SessionUtils__factory = SessionUtils__factory;
