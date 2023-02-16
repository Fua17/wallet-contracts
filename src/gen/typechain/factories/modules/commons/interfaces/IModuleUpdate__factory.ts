/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IModuleUpdate,
  IModuleUpdateInterface,
} from "../../../../modules/commons/interfaces/IModuleUpdate";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IModuleUpdate__factory {
  static readonly abi = _abi;
  static createInterface(): IModuleUpdateInterface {
    return new utils.Interface(_abi) as IModuleUpdateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IModuleUpdate {
    return new Contract(address, _abi, signerOrProvider) as IModuleUpdate;
  }
}