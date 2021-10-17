/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SimpleToken } from "./SimpleToken";

export class SimpleTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<SimpleToken> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<SimpleToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  attach(address: string): SimpleToken {
    return super.attach(address) as SimpleToken;
  }
  connect(signer: Signer): SimpleTokenFactory {
    return super.connect(signer) as SimpleTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleToken {
    return new Contract(address, _abi, signerOrProvider) as SimpleToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d9e38038062000d9e8339810160408190526200003491620002b9565b8251839083906200004d90600390602085019062000168565b5080516200006390600490602084019062000168565b5050506200007833826200008160201b60201c565b505050620003e1565b6001600160a01b038216620000b35760405162461bcd60e51b8152600401620000aa9062000329565b60405180910390fd5b620000c16000838362000163565b8060026000828254620000d5919062000369565b90915550506001600160a01b038216600090815260208190526040812080548392906200010490849062000369565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200014990859062000360565b60405180910390a36200015f6000838362000163565b5050565b505050565b82805462000176906200038e565b90600052602060002090601f0160209004810192826200019a5760008555620001e5565b82601f10620001b557805160ff1916838001178555620001e5565b82800160010185558215620001e5579182015b82811115620001e5578251825591602001919060010190620001c8565b50620001f3929150620001f7565b5090565b5b80821115620001f35760008155600101620001f8565b600082601f8301126200021f578081fd5b81516001600160401b03808211156200023c576200023c620003cb565b6040516020601f8401601f1916820181018381118382101715620002645762000264620003cb565b60405283825285840181018710156200027b578485fd5b8492505b838310156200029e57858301810151828401820152918201916200027f565b83831115620002af57848185840101525b5095945050505050565b600080600060608486031215620002ce578283fd5b83516001600160401b0380821115620002e5578485fd5b620002f3878388016200020e565b9450602086015191508082111562000309578384fd5b5062000318868287016200020e565b925050604084015190509250925092565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b600082198211156200038957634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680620003a357607f821691505b60208210811415620003c557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6109ad80620003f16000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806306fdde031461009e578063095ea7b3146100bc57806318160ddd146100dc57806323b872dd146100f1578063313ce56714610104578063395093511461011957806370a082311461012c57806395d89b411461013f578063a457c2d714610147578063a9059cbb1461015a578063dd62ed3e1461016d575b600080fd5b6100a6610180565b6040516100b391906106cd565b60405180910390f35b6100cf6100ca366004610699565b610212565b6040516100b391906106c2565b6100e461022f565b6040516100b39190610901565b6100cf6100ff36600461065e565b610235565b61010c6102ce565b6040516100b3919061090a565b6100cf610127366004610699565b6102d3565b6100e461013a36600461060b565b610327565b6100a6610346565b6100cf610155366004610699565b610355565b6100cf610168366004610699565b6103ce565b6100e461017b36600461062c565b6103e2565b60606003805461018f9061093c565b80601f01602080910402602001604051908101604052809291908181526020018280546101bb9061093c565b80156102085780601f106101dd57610100808354040283529160200191610208565b820191906000526020600020905b8154815290600101906020018083116101eb57829003601f168201915b5050505050905090565b600061022661021f61040d565b8484610411565b50600192915050565b60025490565b60006102428484846104c5565b6001600160a01b03841660009081526001602052604081208161026361040d565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102af5760405162461bcd60e51b81526004016102a6906107eb565b60405180910390fd5b6102c3856102bb61040d565b858403610411565b506001949350505050565b601290565b60006102266102e061040d565b8484600160006102ee61040d565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103229190610918565b610411565b6001600160a01b0381166000908152602081905260409020545b919050565b60606004805461018f9061093c565b6000806001600061036461040d565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156103b05760405162461bcd60e51b81526004016102a6906108bc565b6103c46103bb61040d565b85858403610411565b5060019392505050565b60006102266103db61040d565b84846104c5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104375760405162461bcd60e51b81526004016102a690610878565b6001600160a01b03821661045d5760405162461bcd60e51b81526004016102a690610763565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104b8908590610901565b60405180910390a3505050565b6001600160a01b0383166104eb5760405162461bcd60e51b81526004016102a690610833565b6001600160a01b0382166105115760405162461bcd60e51b81526004016102a690610720565b61051c8383836105ef565b6001600160a01b038316600090815260208190526040902054818110156105555760405162461bcd60e51b81526004016102a6906107a5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061058c908490610918565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105d69190610901565b60405180910390a36105e98484846105ef565b50505050565b505050565b80356001600160a01b038116811461034157600080fd5b60006020828403121561061c578081fd5b610625826105f4565b9392505050565b6000806040838503121561063e578081fd5b610647836105f4565b9150610655602084016105f4565b90509250929050565b600080600060608486031215610672578081fd5b61067b846105f4565b9250610689602085016105f4565b9150604084013590509250925092565b600080604083850312156106ab578182fd5b6106b4836105f4565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b818110156106f9578581018301518582016040015282016106dd565b8181111561070a5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b6000821982111561093757634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061095057607f821691505b6020821081141561097157634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220d53cf835589d6e2797af1336959428b77a7a2aa83765396716cfa59a7f2806f064736f6c63430008000033";
