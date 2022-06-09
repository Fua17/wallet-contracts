/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IModuleAuth, IModuleAuthInterface } from "../IModuleAuth";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidNestedSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flag",
        type: "uint256",
      },
    ],
    name: "InvalidSignatureFlag",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "InvalidSignatureType",
    type: "error",
  },
];

export class IModuleAuth__factory {
  static readonly abi = _abi;
  static createInterface(): IModuleAuthInterface {
    return new utils.Interface(_abi) as IModuleAuthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IModuleAuth {
    return new Contract(address, _abi, signerOrProvider) as IModuleAuth;
  }
}