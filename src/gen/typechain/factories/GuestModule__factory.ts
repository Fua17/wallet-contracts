/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GuestModule, GuestModuleInterface } from "../GuestModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_provided",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_current",
        type: "uint256",
      },
    ],
    name: "BadGapNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_provided",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_current",
        type: "uint256",
      },
    ],
    name: "BadNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "DelegateCallNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "ExpectedEmptyNonce",
    type: "error",
  },
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
        name: "_type",
        type: "uint256",
      },
    ],
    name: "InvalidNonceType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "InvalidSValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidSignature",
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
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_v",
        type: "uint256",
      },
    ],
    name: "InvalidVValue",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_self",
        type: "address",
      },
    ],
    name: "OnlySelfAuth",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "SignerIsAddress0",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_recoverMode",
        type: "bool",
      },
    ],
    name: "UnsupportedSignatureType",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "CreatedContract",
    type: "event",
  },
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
    anonymous: false,
    inputs: [],
    name: "NoNonceUsed",
    type: "event",
  },
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
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "NonceChange",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
    ],
    name: "TxExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes",
      },
    ],
    name: "TxFailed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "createContract",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readNonce",
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
    name: "selfExecute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c7c806100206000396000f3fe6080604052600436106100965760003560e01c80637a9a16281161006957806390042baf1161004e57806390042baf146101b1578063affed0e0146101e9578063cc63f2e2146101fe57600080fd5b80637a9a1628146101635780638c3f55631461018357600080fd5b806301ffc9a71461009b5780631626ba7e146100d057806320c13b0b1461012157806361c2926c14610141575b600080fd5b3480156100a757600080fd5b506100bb6100b63660046113b1565b61021e565b60405190151581526020015b60405180910390f35b3480156100dc57600080fd5b506100f06100eb366004611410565b61022f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100c7565b34801561012d57600080fd5b506100f061013c36600461145c565b610320565b34801561014d57600080fd5b5061016161015c36600461176b565b6103f0565b005b34801561016f57600080fd5b5061016161017e3660046117a0565b6104c5565b34801561018f57600080fd5b506101a361019e36600461180d565b6104ed565b6040519081526020016100c7565b6101c46101bf366004611826565b610519565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c7565b3480156101f557600080fd5b506101a36105ba565b34801561020a57600080fd5b506101a361021936600461180d565b6105cb565b6000610229826105f7565b92915050565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042830152605680830187905283518084039091018152607690920190925280519101206000906102f1905b84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061065392505050565b1561031957507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b60006103c06102b5868660405161033892919061185b565b604080519182900382207f19010000000000000000000000000000000000000000000000000000000000006020808501919091524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850192909252825180850390920182526076909301909152805191012090565b156103e857507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b60006104b582604051602001610406919061198b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207f1901000000000000000000000000000000000000000000000000000000000000848301524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850191909152825180850390910181526076909301909152815191012090565b90506104c18183610835565b5050565b60006104db8460405160200161040691906119d2565b90506104e78185610835565b50505050565b60006102297f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e836109c2565b6000333014610561576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b81516020830134f060405173ffffffffffffffffffffffffffffffffffffffff821681529091507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b60006105c660006104ed565b905090565b60006102297f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe836109c2565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161064a57506001919050565b61022982610a20565b600080600061066184610a7c565b909250905061ffff821660005b855183101561081857600080806106858987610acc565b975060ff91821694501691507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83016106cb576106c28987610b2b565b965090506107c8565b826106fe5760606106dc8a88610b84565b975090506106ea8b82610c11565b91506106f68386611a48565b9450506107c8565b60028303610793576107108987610b2b565b9650905060006107208a88610f0d565b975061ffff16905060606107358b8984610f5f565b985090506107448c848361103c565b610780578b83826040517f9a94623200000000000000000000000000000000000000000000000000000000815260040161055893929190611a60565b61078a8487611a48565b955050506107c8565b6040517fb2505f7c00000000000000000000000000000000000000000000000000000000815260048101849052602401610558565b604080516020810187905290810183905273ffffffffffffffffffffffffffffffffffffffff8216606082015260800160405160208183030381529060405280519060200120945050505061066e565b8361ffff16811015801561082a575060015b979650505050505050565b60005b81518110156109bd57600082828151811061085557610855611a9e565b602002602001015190506000606082600001511561089f576040517f0d89438e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82604001515a10156108ec5782604001515a6040517f9fa7298200000000000000000000000000000000000000000000000000000000815260048101929092526024820152604401610558565b826060015173ffffffffffffffffffffffffffffffffffffffff1683608001518460400151600014610922578460400151610924565b5a5b908560a001516040516109379190611acd565b600060405180830381858888f193505050503d8060008114610975576040519150601f19603f3d011682016040523d82523d6000602084013e61097a565b606091505b509092509050811561099c5760405186815260200160405180910390a06109a7565b6109a783878361120e565b50505080806109b590611ae9565b915050610838565b505050565b60008083836040516020016109e1929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f0b050cdb000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601610a7357506001919050565b6102298261125e565b600080600283511015610abd57826040517f857f2c1a0000000000000000000000000000000000000000000000000000000081526004016105589190611b21565b50506020015160f01c90600290565b80820160200151825160f882901c9160f01c60ff16906002840190811115610b245784846040517fa19c8fdd000000000000000000000000000000000000000000000000000000008152600401610558929190611b34565b9250925092565b80820160200151825160609190911c906014830190811115610b7d5783836040517fe36e8a17000000000000000000000000000000000000000000000000000000008152600401610558929190611b34565b9250929050565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508351811115610b7d5783836040517f2d24eaea000000000000000000000000000000000000000000000000000000008152600401610558929190611b34565b60008151604214610c5057816040517f2ee17a3d0000000000000000000000000000000000000000000000000000000081526004016105589190611b21565b60008260018451610c619190611b56565b81518110610c7157610c71611a9e565b602001015160f81c60f81b60f81c60ff169050600083604081518110610c9957610c99611a9e565b016020015160f81c90506000610caf8582611327565b90506000610cbe866020611327565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115610d1e5785816040517fad4aac76000000000000000000000000000000000000000000000000000000008152600401610558929190611b34565b8260ff16601b14158015610d3657508260ff16601c14155b15610d715785836040517fe578897e000000000000000000000000000000000000000000000000000000008152600401610558929190611b6d565b60018403610dde5760408051600081526020810180835289905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015610dcd573d6000803e3d6000fd5b505050602060405103519450610eb4565b60028403610e7b576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101889052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a001610dab565b858460016040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161055893929190611b92565b73ffffffffffffffffffffffffffffffffffffffff8516610f0357856040517f6c1719d20000000000000000000000000000000000000000000000000000000081526004016105589190611b21565b5050505092915050565b80820160200151825160f09190911c906002830190811115610b7d5783836040517f80d95e5f000000000000000000000000000000000000000000000000000000008152600401610558929190611b34565b606060008267ffffffffffffffff811115610f7c57610f7c6114c8565b6040519080825280601f01601f191660200182016040528015610fa6576020820181803683370190505b509150838501602001600060205b85811015610fcd57908201518482015260208101610fb4565b8486016020018051939092015190850152525082820183811015610ff357610ff3611bbc565b8451811115611034578484846040517f10a999ce00000000000000000000000000000000000000000000000000000000815260040161055893929190611beb565b935093915050565b600080826001845161104e9190611b56565b8151811061105e5761105e611a9e565b016020015160f81c905060018114806110775750600281145b156110bb578373ffffffffffffffffffffffffffffffffffffffff1661109d8685610c11565b73ffffffffffffffffffffffffffffffffffffffff16149150611206565b600381036111cd5782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861690631626ba7e9061113e9089908890600401611c10565b602060405180830381865afa15801561115b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117f9190611c29565b9084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150611206565b828160006040517f9dfba85200000000000000000000000000000000000000000000000000000000815260040161055893929190611b92565b509392505050565b82602001511561122057805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd78282604051611251929190611c10565b60405180910390a1505050565b60007fffffffff00000000000000000000000000000000000000000000000000000000821615806112d057507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b156112dd57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610229565b600080611335836020611a48565b905080845110156113765783836040517fde59ba13000000000000000000000000000000000000000000000000000000008152600401610558929190611b34565b9092015192915050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146113ae57600080fd5b50565b6000602082840312156113c357600080fd5b813561031981611380565b60008083601f8401126113e057600080fd5b50813567ffffffffffffffff8111156113f857600080fd5b602083019150836020828501011115610b7d57600080fd5b60008060006040848603121561142557600080fd5b83359250602084013567ffffffffffffffff81111561144357600080fd5b61144f868287016113ce565b9497909650939450505050565b6000806000806040858703121561147257600080fd5b843567ffffffffffffffff8082111561148a57600080fd5b611496888389016113ce565b909650945060208701359150808211156114af57600080fd5b506114bc878288016113ce565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561151a5761151a6114c8565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611567576115676114c8565b604052919050565b8035801515811461157f57600080fd5b919050565b600082601f83011261159557600080fd5b813567ffffffffffffffff8111156115af576115af6114c8565b6115e060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611520565b8181528460208386010111156115f557600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261162357600080fd5b8135602067ffffffffffffffff80831115611640576116406114c8565b8260051b61164f838201611520565b938452858101830193838101908886111561166957600080fd5b84880192505b8583101561175f578235848111156116875760008081fd5b880160c0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156116bd5760008081fd5b6116c56114f7565b6116d088840161156f565b815260406116df81850161156f565b8983015260608085013582840152608091508185013573ffffffffffffffffffffffffffffffffffffffff811681146117185760008081fd5b9083015260a0848101358284015292840135928884111561173b57600091508182fd5b6117498e8b86880101611584565b908301525084525050918401919084019061166f565b98975050505050505050565b60006020828403121561177d57600080fd5b813567ffffffffffffffff81111561179457600080fd5b6103e884828501611612565b6000806000606084860312156117b557600080fd5b833567ffffffffffffffff808211156117cd57600080fd5b6117d987838801611612565b94506020860135935060408601359150808211156117f657600080fd5b5061180386828701611584565b9150509250925092565b60006020828403121561181f57600080fd5b5035919050565b60006020828403121561183857600080fd5b813567ffffffffffffffff81111561184f57600080fd5b6103e884828501611584565b8183823760009101908152919050565b60005b8381101561188657818101518382015260200161186e565b838111156104e75750506000910152565b600081518084526118af81602086016020860161186b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000815180845260208085019450848260051b860182860160005b8581101561197e5783830389528151805115158452858101511515868501526040808201519085015260608082015173ffffffffffffffffffffffffffffffffffffffff16908501526080808201519085015260a09081015160c09185018290529061196a81860183611897565b9a87019a94505050908401906001016118fc565b5090979650505050505050565b60408152600560408201527f73656c663a000000000000000000000000000000000000000000000000000000606082015260806020820152600061031960808301846118e1565b60408152600660408201527f67756573743a0000000000000000000000000000000000000000000000000000606082015260806020820152600061031960808301846118e1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611a5b57611a5b611a19565b500190565b83815273ffffffffffffffffffffffffffffffffffffffff83166020820152606060408201526000611a956060830184611897565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008251611adf81846020870161186b565b9190910192915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b1a57611b1a611a19565b5060010190565b6020815260006103196020830184611897565b604081526000611b476040830185611897565b90508260208301529392505050565b600082821015611b6857611b68611a19565b500390565b604081526000611b806040830185611897565b905060ff831660208301529392505050565b606081526000611ba56060830186611897565b602083019490945250901515604090910152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b606081526000611bfe6060830186611897565b60208301949094525060400152919050565b8281526040602082015260006103e86040830184611897565b600060208284031215611c3b57600080fd5b81516103198161138056fea2646970667358221220fea5ccec7a7d46a57bc5179e1bccdf6a0b711b3da5c28f0063e9e95a564cafdf64736f6c634300080e0033";

export class GuestModule__factory extends ContractFactory {
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
  ): Promise<GuestModule> {
    return super.deploy(overrides || {}) as Promise<GuestModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GuestModule {
    return super.attach(address) as GuestModule;
  }
  connect(signer: Signer): GuestModule__factory {
    return super.connect(signer) as GuestModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuestModuleInterface {
    return new utils.Interface(_abi) as GuestModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuestModule {
    return new Contract(address, _abi, signerOrProvider) as GuestModule;
  }
}
