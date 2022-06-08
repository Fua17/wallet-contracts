/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MultiCallUtils,
  MultiCallUtilsInterface,
} from "../MultiCallUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_result",
        type: "bytes",
      },
    ],
    name: "CallReverted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "DelegateCallNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_available",
        type: "uint256",
      },
    ],
    name: "NotEnoughGas",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callBalanceOf",
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
  {
    inputs: [],
    name: "callBlockNumber",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
    ],
    name: "callBlockhash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callCode",
    outputs: [
      {
        internalType: "bytes",
        name: "code",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "codeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callCodeSize",
    outputs: [
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callDifficulty",
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
  {
    inputs: [],
    name: "callGasLeft",
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
  {
    inputs: [],
    name: "callGasLimit",
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
  {
    inputs: [],
    name: "callGasPrice",
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
  {
    inputs: [],
    name: "callOrigin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callTimestamp",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
    ],
    name: "multiCall",
    outputs: [
      {
        internalType: "bool[]",
        name: "_successes",
        type: "bool[]",
      },
      {
        internalType: "bytes[]",
        name: "_results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610acf806100206000396000f3fe6080604052600436106100e85760003560e01c8063c272d5c31161008a578063d5b5337f11610059578063d5b5337f14610244578063e90f13e714610231578063f209883a14610263578063ffd7d7411461027657600080fd5b8063c272d5c3146101d2578063c39f2d5c146101e5578063c66764e114610204578063d1db39071461023157600080fd5b8063543196eb116100c6578063543196eb14610159578063984395bc1461017857806398f9fbc4146101ac578063aeea5fb5146101bf57600080fd5b80630fdecfac146100ed57806343d9c9351461010f57806348acd29f14610124575b600080fd5b3480156100f957600080fd5b50465b6040519081526020015b60405180910390f35b34801561011b57600080fd5b506100fc610297565b34801561013057600080fd5b506100fc61013f3660046105dd565b73ffffffffffffffffffffffffffffffffffffffff163190565b34801561016557600080fd5b506100fc6101743660046105dd565b3f90565b34801561018457600080fd5b50325b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610106565b3480156101b857600080fd5b5041610187565b3480156101cb57600080fd5b50446100fc565b3480156101de57600080fd5b503a6100fc565b3480156101f157600080fd5b506100fc6102003660046105dd565b3b90565b34801561021057600080fd5b5061022461021f3660046105dd565b61029f565b6040516101069190610679565b34801561023d57600080fd5b50456100fc565b34801561025057600080fd5b506100fc61025f36600461068c565b4090565b34801561026f57600080fd5b50426100fc565b61028961028436600461075c565b6102e4565b604051610106929190610916565b60005a905090565b60408051603f833b9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092528181529080600060208401853c50919050565b606080825167ffffffffffffffff811115610301576103016106a5565b60405190808252806020026020018201604052801561032a578160200160208202803683370190505b509150825167ffffffffffffffff811115610347576103476106a5565b60405190808252806020026020018201604052801561037a57816020015b60608152602001906001900390816103655790505b50905060005b83518110156105ae57600084828151811061039d5761039d6109ce565b602002602001015190508060000151156103eb576040517f230d1ccc000000000000000000000000000000000000000000000000000000008152600481018390526024015b60405180910390fd5b80604001515a10156104385780604001515a6040517f9fa72982000000000000000000000000000000000000000000000000000000008152600481019290925260248201526044016103e2565b806060015173ffffffffffffffffffffffffffffffffffffffff168160800151826040015160001461046e578260400151610470565b5a5b908360a0015160405161048391906109fd565b600060405180830381858888f193505050503d80600081146104c1576040519150601f19603f3d011682016040523d82523d6000602084013e6104c6565b606091505b508584815181106104d9576104d96109ce565b602002602001018585815181106104f2576104f26109ce565b6020026020010182905282151515158152505050838281518110610518576105186109ce565b6020026020010151158015610547575084828151811061053a5761053a6109ce565b6020026020010151602001515b1561059b578183838151811061055f5761055f6109ce565b60200260200101516040517f3b4c7a5f0000000000000000000000000000000000000000000000000000000081526004016103e2929190610a19565b50806105a681610a3a565b915050610380565b50915091565b803573ffffffffffffffffffffffffffffffffffffffff811681146105d857600080fd5b919050565b6000602082840312156105ef57600080fd5b6105f8826105b4565b9392505050565b60005b8381101561061a578181015183820152602001610602565b83811115610629576000848401525b50505050565b600081518084526106478160208601602086016105ff565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006105f8602083018461062f565b60006020828403121561069e57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156106f7576106f76106a5565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610744576107446106a5565b604052919050565b803580151581146105d857600080fd5b6000602080838503121561076f57600080fd5b823567ffffffffffffffff8082111561078757600080fd5b818501915085601f83011261079b57600080fd5b8135818111156107ad576107ad6106a5565b8060051b6107bc8582016106fd565b91825283810185019185810190898411156107d657600080fd5b86860192505b83831015610909578235858111156107f45760008081fd5b860160c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828d03810182131561082b5760008081fd5b6108336106d4565b61083e8b850161074c565b8152604061084d81860161074c565b8c8301526060808601358284015260806108688188016105b4565b8285015260a091508187013581850152508486013594508a85111561088d5760008081fd5b84860195508f603f8701126108a457600094508485fd5b8c86013594508a8511156108ba576108ba6106a5565b6108ca8d85601f880116016106fd565b93508484528f828688010111156108e15760008081fd5b848287018e86013760009484018d0194909452509182015283525091860191908601906107dc565b9998505050505050505050565b604080825283519082018190526000906020906060840190828701845b82811015610951578151151584529284019290840190600101610933565b50505083810382850152845180825282820190600581901b8301840187850160005b838110156109bf577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030185526109ad83835161062f565b94870194925090860190600101610973565b50909998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008251610a0f8184602087016105ff565b9190910192915050565b828152604060208201526000610a32604083018461062f565b949350505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610a92577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220dd6c5a935773984754104a28c6302930147d2da84b5492dd46b908606ee4f70e64736f6c634300080e0033";

export class MultiCallUtils__factory extends ContractFactory {
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
  ): Promise<MultiCallUtils> {
    return super.deploy(overrides || {}) as Promise<MultiCallUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MultiCallUtils {
    return super.attach(address) as MultiCallUtils;
  }
  connect(signer: Signer): MultiCallUtils__factory {
    return super.connect(signer) as MultiCallUtils__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiCallUtilsInterface {
    return new utils.Interface(_abi) as MultiCallUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiCallUtils {
    return new Contract(address, _abi, signerOrProvider) as MultiCallUtils;
  }
}
