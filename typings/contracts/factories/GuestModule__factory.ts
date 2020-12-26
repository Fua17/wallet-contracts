/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GuestModule } from "../GuestModule";

export class GuestModule__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GuestModule> {
    return super.deploy(overrides || {}) as Promise<GuestModule>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GuestModule {
    return super.attach(address) as GuestModule;
  }
  connect(signer: Signer): GuestModule__factory {
    return super.connect(signer) as GuestModule__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuestModule {
    return new Contract(address, _abi, signerOrProvider) as GuestModule;
  }
}

const _abi = [
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
  "0x608060405234801561001057600080fd5b50611877806100206000396000f3fe60806040526004361061007b5760003560e01c80637a9a16281161004e5780637a9a1628146101255780638c3f55631461014557806390042baf14610172578063affed0e0146101925761007b565b806301ffc9a7146100805780631626ba7e146100b657806320c13b0b146100e357806361c2926c14610103575b600080fd5b34801561008c57600080fd5b506100a061009b366004611200565b6101a7565b6040516100ad9190611447565b60405180910390f35b3480156100c257600080fd5b506100d66100d13660046111b6565b6101ba565b6040516100ad9190611474565b3480156100ef57600080fd5b506100d66100fe366004611240565b61022b565b34801561010f57600080fd5b5061012361011e366004611119565b6102db565b005b34801561013157600080fd5b5061012361014036600461114c565b610315565b34801561015157600080fd5b506101656101603660046112dc565b61033d565b6040516100ad9190611452565b6101856101803660046112a9565b610369565b6040516100ad9190611426565b34801561019e57600080fd5b5061016561041d565b60006101b28261042e565b90505b919050565b60006101fc8484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061048b92505050565b1561022457507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b60006102ab61026f86868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105dc92505050565b84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061048b92505050565b156102d357507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b6000610305826040516020016102f191906115a2565b6040516020818303038152906040526105dc565b9050610311818361063c565b5050565b600061032b846040516020016102f191906114fe565b9050610337818561063c565b50505050565b60006101b27f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e836107b7565b60003330146103c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061181b6027913960400191505060405180910390fd5b81516020830134f06040805173ffffffffffffffffffffffffffffffffffffffff8316815290519192507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c919081900360200190a1919050565b6000610429600061033d565b905090565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f90042baf000000000000000000000000000000000000000000000000000000001415610482575060016101b5565b6101b2826107e4565b600080600061049984610841565b909250905061ffff821660005b85518310156105b957600080806104bd89876108af565b975060ff918216945016915060018314156104e5576104dc8987610929565b96509050610562565b826105115760606104f68a8861099d565b975090506105048b82610a45565b9150828501945050610562565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611677602c913960400191505060405180910390fd5b848282604051602001808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200193505050506040516020818303038152906040528051906020012094505050506104a6565b8361ffff1681101580156105d157506105d182610d74565b979650505050505050565b8051602091820120604080517f1901000000000000000000000000000000000000000000000000000000000000818501524660228201523060601b6042820152605680820193909352815180820390930183526076019052805191012090565b60005b81518110156107b257600082828151811061065657fe5b60200260200101519050600060608260000151156106a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a090611545565b60405180910390fd5b82604001515a10156106e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a0906114a1565b826060015173ffffffffffffffffffffffffffffffffffffffff168360800151846040015160001461071d57846040015161071f565b5a5b908560a00151604051610732919061140a565b600060405180830381858888f193505050503d8060008114610770576040519150601f19603f3d011682016040523d82523d6000602084013e610775565b606091505b509092509050811561079c578560405161078f9190611452565b60405180910390a06107a7565b6107a7838783610d7a565b50505060010161063f565b505050565b60408051602080820194909452808201929092528051808303820181526060909201905280519101205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f389901c7000000000000000000000000000000000000000000000000000000001415610838575060016101b5565b6101b282610dca565b6020810151815160f09190911c906002908111156108aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806116c66027913960400191505060405180910390fd5b915091565b80820160200151825160f882901c9160f01c60ff16906002840190811115610922576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117b96026913960400191505060405180910390fd5b9250925092565b80820160200151825160609190911c906014830190811115610996576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806116a36023913960400191505060405180910390fd5b9250929050565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508351811115610996576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061175a6023913960400191505060405180910390fd5b60008082600184510381518110610a5857fe5b602001015160f81c60f81b60f81c60ff169050600083604081518110610a7a57fe5b016020015160f81c90506000610a908582610e52565b90506000610a9f866020610e52565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115610b1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d81526020018061163a603d913960400191505060405180910390fd5b8260ff16601b14158015610b3257508260ff16601c14155b15610b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806116ed603d913960400191505060405180910390fd5b6001841415610bfc5760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610beb573d6000803e3d6000fd5b505050602060405103519450610cfe565b6002841415610cad5760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610beb573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c81526020018061177d603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516610d6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061172a6030913960400191505060405180910390fd5b5050505092915050565b50600190565b826020015115610d8c57805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd78282604051610dbd92919061145b565b60405180910390a1505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082161580610e3c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15610e49575060016101b5565b6101b282610eba565b60008160200183511015610eb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c8152602001806117df603c913960400191505060405180910390fd5b50016020015190565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146101b557600080fd5b600082601f830112610f38578081fd5b8135602067ffffffffffffffff80831115610f4f57fe5b610f5c82838502016115e9565b83815282810190868401865b86811015611038578135890160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838e03011215610fa657898afd5b604080518281018181108a82111715610fbb57fe5b8252610fc8848b01611046565b8152610fd5828501611046565b8a8201526060808501358383015260809250610ff2838601610f04565b9082015260a08481013583830152928401359289841115611011578c8dfd5b61101f8f8c86880101611096565b9082015287525050509285019290850190600101610f68565b509098975050505050505050565b803580151581146101b557600080fd5b60008083601f840112611067578182fd5b50813567ffffffffffffffff81111561107e578182fd5b60208301915083602082850101111561099657600080fd5b600082601f8301126110a6578081fd5b813567ffffffffffffffff8111156110ba57fe5b6110eb60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016115e9565b8181528460208386010111156110ff578283fd5b816020850160208301379081016020019190915292915050565b60006020828403121561112a578081fd5b813567ffffffffffffffff811115611140578182fd5b6102d384828501610f28565b600080600060608486031215611160578182fd5b833567ffffffffffffffff80821115611177578384fd5b61118387838801610f28565b945060208601359350604086013591508082111561119f578283fd5b506111ac86828701611096565b9150509250925092565b6000806000604084860312156111ca578283fd5b83359250602084013567ffffffffffffffff8111156111e7578283fd5b6111f386828701611056565b9497909650939450505050565b600060208284031215611211578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610224578182fd5b60008060008060408587031215611255578081fd5b843567ffffffffffffffff8082111561126c578283fd5b61127888838901611056565b90965094506020870135915080821115611290578283fd5b5061129d87828801611056565b95989497509550505050565b6000602082840312156112ba578081fd5b813567ffffffffffffffff8111156112d0578182fd5b6102d384828501611096565b6000602082840312156112ed578081fd5b5035919050565b60008282518085526020808601955080818302840101818601855b848110156113b3578583037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00189528151805115158452848101511515858501526040808201519085015260608082015173ffffffffffffffffffffffffffffffffffffffff16908501526080808201519085015260a09081015160c09185018290529061139f818601836113c0565b9a86019a945050509083019060010161130f565b5090979650505050505050565b600081518084526113d881602086016020860161160d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825161141c81846020870161160d565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b6000838252604060208301526102d360408301846113c0565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b60208082526029908201527f47756573744d6f64756c65235f6578656375746547756573743a204e4f545f4560408201527f4e4f5547485f4741530000000000000000000000000000000000000000000000606082015260800190565b600060408252600660408301527f67756573743a000000000000000000000000000000000000000000000000000060608301526080602083015261022460808301846112f4565b60208082526033908201527f47756573744d6f64756c65235f6578656375746547756573743a2064656c656760408201527f61746543616c6c206e6f7420616c6c6f77656400000000000000000000000000606082015260800190565b600060408252600560408301527f73656c663a00000000000000000000000000000000000000000000000000000060608301526080602083015261022460808301846112f4565b60405181810167ffffffffffffffff8111828210171561160557fe5b604052919050565b60005b83811015611628578181015183820152602001611610565b83811115610337575050600091015256fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75654d6f64756c6541757468235f7369676e617475726556616c69646174696f6e20494e56414c49445f464c41474c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45524c696242797465732372656164427974657336363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f52455155495245444d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a2646970667358221220a1b2d361825c7ba8bc71cbd6f771bb76bed866f193c1b24463b43907d979468064736f6c63430007060033";