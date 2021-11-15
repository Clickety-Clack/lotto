/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Lottery } from "./Lottery";

export class LotteryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    in_manager: string,
    in_lotteryName: string,
    in_createdAt: string,
    in_endAt: string,
    in_creatorFee: BigNumberish,
    in_coinsRequired: BigNumberish,
    overrides?: Overrides
  ): Promise<Lottery> {
    return super.deploy(
      in_manager,
      in_lotteryName,
      in_createdAt,
      in_endAt,
      in_creatorFee,
      in_coinsRequired,
      overrides || {}
    ) as Promise<Lottery>;
  }
  getDeployTransaction(
    in_manager: string,
    in_lotteryName: string,
    in_createdAt: string,
    in_endAt: string,
    in_creatorFee: BigNumberish,
    in_coinsRequired: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      in_manager,
      in_lotteryName,
      in_createdAt,
      in_endAt,
      in_creatorFee,
      in_coinsRequired,
      overrides || {}
    );
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
    name: "potSize",
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
    name: "endAt",
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
        name: "status",
        type: "bool",
      },
    ],
    name: "setLotteryStatus",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "createdAt",
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
    name: "coinsRequired",
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
        name: "ticketCount",
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
    inputs: [],
    name: "creatorFee",
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
    constant: false,
    inputs: [
      {
        name: "playerName",
        type: "string",
      },
      {
        name: "tickets",
        type: "uint256",
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
        name: "in_manager",
        type: "address",
      },
      {
        name: "in_lotteryName",
        type: "string",
      },
      {
        name: "in_createdAt",
        type: "string",
      },
      {
        name: "in_endAt",
        type: "string",
      },
      {
        name: "in_creatorFee",
        type: "uint256",
      },
      {
        name: "in_coinsRequired",
        type: "uint256",
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
        name: "ticketCount",
        type: "uint256",
      },
    ],
    name: "PlayerParticipated",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000fd438038062000fd48339810160409081528151602080840151928401516060850151608086015160a087015160008054600160a060020a031916600160a060020a03881617905595870180519597909693810195920193909291620000849160019190880190620000d6565b5083516200009a906002906020870190620000d6565b508251620000b0906003906020860190620000d6565b506004919091556005555050600d805460ff19166001179055505060006006556200017b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200011957805160ff191683800117855562000149565b8280016001018555821562000149579182015b82811115620001495782518255916020019190600101906200012c565b50620001579291506200015b565b5090565b6200017891905b8082111562000157576000815560010162000162565b90565b610e49806200018b6000396000f3006080604052600436106100d75763ffffffff60e060020a60003504166310c85fe5811461010657806314034bd21461012f57806323d1414914610144578063481c6a75146101ce5780635832d571146101ff5780635c12cd4b1461021757806368b6d55d146102b75780637cc3ae8c146102de5780638b5b9ccc146102f3578063a341c7f214610358578063cf09e0d014610372578063d29b84e214610387578063d68895d81461039c578063dfbf53ae146103b1578063e88958dc1461044c578063f1c4b85d14610461578063f25266dd146104af575b61010460408051908101604052806007815260200160c960020a662ab735b737bbb70281525060006104c7565b005b34801561011257600080fd5b5061011b6106a2565b604080519115158252519081900360200190f35b34801561013b57600080fd5b506101046106ab565b34801561015057600080fd5b506101596108a8565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019357818101518382015260200161017b565b50505050905090810190601f1680156101c05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101da57600080fd5b506101e3610935565b60408051600160a060020a039092168252519081900360200190f35b34801561020b57600080fd5b506101e3600435610944565b34801561022357600080fd5b50610238600160a060020a036004351661096c565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561027b578181015183820152602001610263565b50505050905090810190601f1680156102a85780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156102c357600080fd5b506102cc610a4d565b60408051918252519081900360200190f35b3480156102ea57600080fd5b50610159610a53565b3480156102ff57600080fd5b50610308610aae565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561034457818101518382015260200161032c565b505050509050019250505060405180910390f35b34801561036457600080fd5b506101046004351515610b11565b34801561037e57600080fd5b50610159610b3b565b34801561039357600080fd5b506102cc610b93565b3480156103a857600080fd5b506102cc610b99565b3480156103bd57600080fd5b506103c6610b9e565b6040518080602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561040f5781810151838201526020016103f7565b50505050905090810190601f16801561043c5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561045857600080fd5b506102cc610c3c565b6040805160206004803580820135601f810184900484028501840190955284845261010494369492936024939284019190819084018382808284375094975050933594506104c79350505050565b3480156104bb57600080fd5b506101e3600435610c42565b81516000106104d557600080fd5b600d5460ff1615156104e657600080fd5b60068054820190556104f733610c50565b1561057c5733600090815260086020908152604090912060018101839055835161052392850190610d10565b5060078054600181019091557fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68881018054600160a060020a03191633908117909155600090815260086020526040902060020155610595565b3360009081526008602052604090206001018054820190555b6009805460018181019092557f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af018054600160a060020a031916339081179091556000908152600860209081526040918290208084015483519283018190528383528154600295811615610100026000190116949094049282018390527f76041b6e8130995874e79e751d284536c37242cb014fb0584ede1d1e64ce03c9939092909190819060608201908590801561068f5780601f106106645761010080835404028352916020019161068f565b820191906000526020600020905b81548152906001019060200180831161067257829003601f168201915b5050935050505060405180910390a15050565b600d5460ff1681565b60008054600160a060020a031633146106c357600080fd5b6009546000106106d257600080fd5b6009546106dd610cae565b8115156106e657fe5b0690506009818154811015156106f857fe5b600091825260209091200154600454600160a060020a03909116906108fc906064908103303102049081150290604051600060405180830381858888f1935050505015801561074b573d6000803e3d6000fd5b50600054600454600160a060020a03909116906108fc90606490303102049081150290604051600060405180830381858888f19350505050158015610794573d6000803e3d6000fd5b50600860006009838154811015156107a857fe5b6000918252602080832090910154600160a060020a03168352820192909252604001902080546107ed91600a9160026000196001831615610100020190911604610d8e565b50600d805460ff19169055604080516020808252600a8054600260001960018316156101000201909116049183018290527f29e79cde71417375ffd994f45819ee4fa57bd2bf00dc120499710ff0f43b6d33939092918291820190849080156108975780601f1061086c57610100808354040283529160200191610897565b820191906000526020600020905b81548152906001019060200180831161087a57829003601f168201915b50509250505060405180910390a150565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561092d5780601f106109025761010080835404028352916020019161092d565b820191906000526020600020905b81548152906001019060200180831161091057829003601f168201915b505050505081565b600054600160a060020a031681565b600780548290811061095257fe5b600091825260209091200154600160a060020a0316905081565b6060600061097983610c50565b1561099557505060408051602081019091526000808252610a48565b600160a060020a03831660009081526008602090815260409182902060018082015482548551600293821615610100026000190190911692909204601f81018590048502830185019095528482529193919290918491830182828015610a3c5780601f10610a1157610100808354040283529160200191610a3c565b820191906000526020600020905b815481529060010190602001808311610a1f57829003601f168201915b50505050509150915091505b915091565b60065481565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561092d5780601f106109025761010080835404028352916020019161092d565b60606007805480602002602001604051908101604052809291908181526020018280548015610b0657602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610ae8575b505050505090505b90565b600054600160a060020a03163314610b2857600080fd5b600d805460ff1916911515919091179055565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561092d5780601f106109025761010080835404028352916020019161092d565b60055481565b303190565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152918391830182828015610c265780601f10610bfb57610100808354040283529160200191610c26565b820191906000526020600020905b815481529060010190602001808311610c0957829003601f168201915b5050505050908060010154908060020154905083565b60045481565b600980548290811061095257fe5b6007546000901515610c6457506001610ca9565b600160a060020a038216600081815260086020526040902060020154600780549091908110610c8f57fe5b600091825260209091200154600160a060020a0316141590505b919050565b600044426009604051808481526020018381526020018280548015610cfc57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610cde575b505060405190819003902094505050505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d5157805160ff1916838001178555610d7e565b82800160010185558215610d7e579182015b82811115610d7e578251825591602001919060010190610d63565b50610d8a929150610e03565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610dc75780548555610d7e565b82800160010185558215610d7e57600052602060002091601f016020900482015b82811115610d7e578254825591600101919060010190610de8565b610b0e91905b80821115610d8a5760008155600101610e095600a165627a7a723058200d522fb1f8a39436b8a246302cc2a80547a820b79d329e90e8f310fdd21472f40029";
