/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ReadGapNonceHook } from "../ReadGapNonceHook";

export class ReadGapNonceHook__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReadGapNonceHook> {
    return super.deploy(overrides || {}) as Promise<ReadGapNonceHook>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReadGapNonceHook {
    return super.attach(address) as ReadGapNonceHook;
  }
  connect(signer: Signer): ReadGapNonceHook__factory {
    return super.connect(signer) as ReadGapNonceHook__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReadGapNonceHook {
    return new Contract(address, _abi, signerOrProvider) as ReadGapNonceHook;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_oldNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "GapNonceChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readGapNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061012e806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063cc63f2e214602d575b600080fd5b603c603836600460e0565b604e565b60405190815260200160405180910390f35b6000605782605d565b92915050565b600060577f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe83600080838360405160200160a1929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60006020828403121560f157600080fd5b503591905056fea26469706673582212202a506788e16c5dc2a9f35a3607fae8ad5abe5039f515c367590dc58cd9c8399364736f6c634300080e0033";