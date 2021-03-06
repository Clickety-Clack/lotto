/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SafeMath } from "./SafeMath";

export class SafeMathFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SafeMath> {
    return super.deploy(overrides || {}) as Promise<SafeMath>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafeMath {
    return super.attach(address) as SafeMath;
  }
  connect(signer: Signer): SafeMathFactory {
    return super.connect(signer) as SafeMathFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMath {
    return new Contract(address, _abi, signerOrProvider) as SafeMath;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "safeSub",
    outputs: [
      {
        name: "c",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "safeDiv",
    outputs: [
      {
        name: "c",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "safeMul",
    outputs: [
      {
        name: "c",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "safeAdd",
    outputs: [
      {
        name: "c",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610168806100206000396000f3006080604052600436106100485763ffffffff60e060020a600035041663a293d1e8811461004d578063b5931f7c1461007a578063d05c78da14610095578063e6cb9013146100b0575b600080fd5b34801561005957600080fd5b506100686004356024356100cb565b60408051918252519081900360200190f35b34801561008657600080fd5b506100686004356024356100e0565b3480156100a157600080fd5b50610068600435602435610101565b3480156100bc57600080fd5b5061006860043560243561012c565b6000828211156100da57600080fd5b50900390565b60008082116100ee57600080fd5b81838115156100f957fe5b049392505050565b81810282158061011b575081838281151561011857fe5b04145b151561012657600080fd5b92915050565b8181018281101561012657600080fd00a165627a7a723058207afc56b1744cc0bfecad56dd3c4580ce6f2340ffe95ceab9f57a15c64e649c420029";
