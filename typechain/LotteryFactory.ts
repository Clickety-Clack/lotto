/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Lottery } from "./Lottery";

export class LotteryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    creator: string,
    overrides?: Overrides
  ): Promise<Lottery> {
    return super.deploy(name, creator, overrides || {}) as Promise<Lottery>;
  }
  getDeployTransaction(
    name: string,
    creator: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, creator, overrides || {});
  }
  attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  connect(signer: Signer): LotteryFactory {
    return super.connect(signer) as LotteryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "isLotteryLive",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "declareWinner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "playerName",
        type: "string",
      },
    ],
    name: "participate",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lotteryName",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "addressIndexes",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "playerAddress",
        type: "address",
      },
    ],
    name: "getPlayer",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ethToParticipate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxEntriesForPlayer",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        name: "",
        type: "address[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "maxEntries",
        type: "uint256",
      },
      {
        name: "ethRequired",
        type: "uint256",
      },
    ],
    name: "activateLottery",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getWinningPrice",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "winner",
    outputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "entryCount",
        type: "uint256",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryBag",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "creator",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        name: "entryCount",
        type: "uint256",
      },
    ],
    name: "WinnerDeclared",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        name: "entryCount",
        type: "uint256",
      },
    ],
    name: "PlayerParticipated",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610f07380380610f0783398101604052805160208083015160018054600160a060020a031916600160a060020a038316179055919092018051909261005e91600091850190610066565b505050610101565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a757805160ff19168380011785556100d4565b828001600101855582156100d4579182015b828111156100d45782518255916020019190600101906100b9565b506100e09291506100e4565b5090565b6100fe91905b808211156100e057600081556001016100ea565b90565b610df7806101106000396000f3006080604052600436106100b65763ffffffff60e060020a60003504166310c85fe581146100e357806314034bd21461010c5780631d27769f1461012157806323d141491461016d578063481c6a75146101f75780635832d571146102285780635c12cd4b146102405780635d58a74a146102e05780637752045b146103075780638b5b9ccc1461031c578063bdaea32614610381578063d68895d81461039c578063dfbf53ae146103b1578063f25266dd1461044c575b6100e160408051908101604052806007815260200160c960020a662ab735b737bbb702815250610464565b005b3480156100ef57600080fd5b506100f8610671565b604080519115158252519081900360200190f35b34801561011857600080fd5b506100e161067a565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497506104649650505050505050565b34801561017957600080fd5b5061018261086a565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101bc5781810151838201526020016101a4565b50505050905090810190601f1680156101e95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561020357600080fd5b5061020c6108f8565b60408051600160a060020a039092168252519081900360200190f35b34801561023457600080fd5b5061020c600435610907565b34801561024c57600080fd5b50610261600160a060020a036004351661092f565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156102a457818101518382015260200161028c565b50505050905090810190601f1680156102d15780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156102ec57600080fd5b506102f5610a10565b60408051918252519081900360200190f35b34801561031357600080fd5b506102f5610a16565b34801561032857600080fd5b50610331610a1c565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561036d578181015183820152602001610355565b505050509050019250505060405180910390f35b34801561038d57600080fd5b506100e1600435602435610a7f565b3480156103a857600080fd5b506102f5610acb565b3480156103bd57600080fd5b506103c6610ad0565b6040518080602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561040f5781810151838201526020016103f7565b50505050905090810190601f16801561043c5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561045857600080fd5b5061020c600435610b6e565b805160001061047257600080fd5b60085460ff16151561048357600080fd5b600a54670de0b6b3a7640000023414151561049d57600080fd5b60095433600090815260036020526040902060010154106104bd57600080fd5b6104c633610b7c565b156105495733600090815260036020908152604090912060018181015582516104f192840190610c39565b50600280546001810182557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace81018054600160a060020a03191633908117909155600090815260036020526040902090910155610565565b3360009081526003602052604090206001908101805490910190555b6004805460018181019092557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b018054600160a060020a031916339081179091556000908152600360209081526040918290208084015483519283018190528383528154600295811615610100026000190116949094049282018390527f76041b6e8130995874e79e751d284536c37242cb014fb0584ede1d1e64ce03c9939092909190819060608201908590801561065f5780601f106106345761010080835404028352916020019161065f565b820191906000526020600020905b81548152906001019060200180831161064257829003601f168201915b5050935050505060405180910390a150565b60085460ff1681565b600154600090600160a060020a0316331461069457600080fd5b6004546000106106a357600080fd5b6004546106ae610bd7565b8115156106b757fe5b0690506004818154811015156106c957fe5b6000918252602082200154604051600160a060020a0390911691303180156108fc02929091818181858888f1935050505015801561070b573d6000803e3d6000fd5b506003600060048381548110151561071f57fe5b6000918252602080832090910154600160a060020a03168352820192909252604001902080546107649160059160026000196001831615610100020190911604610cb7565b506003600060048381548110151561077857fe5b600091825260208083209190910154600160a060020a0316835282810193909352604091820181206001015460065581519081529182019081905290516107c191600491610d2c565b5060408051600081526020810191829052516107df91600291610d2c565b506008805460ff19169055600654604080516020810183905281815260058054600260001960018316156101000201909116049282018390527fd6d1eeba639254bd05e36261ae299af245328ab997fd9b7823d5fff17f1b74a4939092909190819060608201908590801561065f5780601f106106345761010080835404028352916020019161065f565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108f05780601f106108c5576101008083540402835291602001916108f0565b820191906000526020600020905b8154815290600101906020018083116108d357829003601f168201915b505050505081565b600154600160a060020a031681565b600280548290811061091557fe5b600091825260209091200154600160a060020a0316905081565b6060600061093c83610b7c565b1561095857505060408051602081019091526000808252610a0b565b600160a060020a03831660009081526003602090815260409182902060018082015482548551600293821615610100026000190190911692909204601f810185900485028301850190955284825291939192909184918301828280156109ff5780601f106109d4576101008083540402835291602001916109ff565b820191906000526020600020905b8154815290600101906020018083116109e257829003601f168201915b50505050509150915091505b915091565b600a5481565b60095481565b60606002805480602002602001604051908101604052809291908181526020018280548015610a7457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610a56575b505050505090505b90565b600154600160a060020a03163314610a9657600080fd5b6008805460ff191660011790558115610aaf5781610ab2565b60015b6009558015610ac15780610ac4565b60015b600a555050565b303190565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152918391830182828015610b585780601f10610b2d57610100808354040283529160200191610b58565b820191906000526020600020905b815481529060010190602001808311610b3b57829003601f168201915b5050505050908060010154908060020154905083565b600480548290811061091557fe5b6002546000901515610b9057506001610bd2565b600160a060020a038216600081815260036020526040902060029081015481548110610bb857fe5b600091825260209091200154600160a060020a0316141590505b919050565b600044426004604051808481526020018381526020018280548015610c2557602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610c07575b505060405190819003902094505050505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c7a57805160ff1916838001178555610ca7565b82800160010185558215610ca7579182015b82811115610ca7578251825591602001919060010190610c8c565b50610cb3929150610d8d565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610cf05780548555610ca7565b82800160010185558215610ca757600052602060002091601f016020900482015b82811115610ca7578254825591600101919060010190610d11565b828054828255906000526020600020908101928215610d81579160200282015b82811115610d815782518254600160a060020a031916600160a060020a03909116178255602090920191600190910190610d4c565b50610cb3929150610da7565b610a7c91905b80821115610cb35760008155600101610d93565b610a7c91905b80821115610cb3578054600160a060020a0319168155600101610dad5600a165627a7a72305820fd4e0563a847207564552d84780bc036e4c3e4ec7f114d72b7909d01c5bfa0ef0029";
