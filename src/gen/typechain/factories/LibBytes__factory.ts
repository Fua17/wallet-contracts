/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibBytes, LibBytesInterface } from "../LibBytes";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadAddressOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadBytes32OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadBytes66OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_datam",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
    ],
    name: "ReadBytesOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ReadFirstUint16OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadUint16OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ReadUint8Uint8OutOfBounds",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bdc45cf87053bcb9144c8cdeb844e9f03480b0f0b8e3f133719f449b10b5bd0564736f6c634300080e0033";

export class LibBytes__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibBytes> {
    return super.deploy(overrides || {}) as Promise<LibBytes>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibBytes {
    return super.attach(address) as LibBytes;
  }
  connect(signer: Signer): LibBytes__factory {
    return super.connect(signer) as LibBytes__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibBytesInterface {
    return new utils.Interface(_abi) as LibBytesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibBytes {
    return new Contract(address, _abi, signerOrProvider) as LibBytes;
  }
}
