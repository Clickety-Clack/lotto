/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AbstractAnimalHouseEntityInterface extends ethers.utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setWallet(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "wallet()": FunctionFragment;
    "withdrawToWallet()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "setWallet", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawToWallet",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToWallet",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class AbstractAnimalHouseEntity extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AbstractAnimalHouseEntityInterface;

  functions: {
    admin(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "admin()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setAdmin(
      newAdmin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAdmin(address)"(
      newAdmin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setWallet(
      newWallet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setWallet(address)"(
      newWallet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    wallet(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "wallet()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    withdrawToWallet(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawToWallet()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setAdmin(
    newAdmin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAdmin(address)"(
    newAdmin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setWallet(
    newWallet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setWallet(address)"(
    newWallet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  wallet(overrides?: CallOverrides): Promise<string>;

  "wallet()"(overrides?: CallOverrides): Promise<string>;

  withdrawToWallet(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawToWallet()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;

    "setAdmin(address)"(
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWallet(newWallet: string, overrides?: CallOverrides): Promise<void>;

    "setWallet(address)"(
      newWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wallet(overrides?: CallOverrides): Promise<string>;

    "wallet()"(overrides?: CallOverrides): Promise<string>;

    withdrawToWallet(overrides?: CallOverrides): Promise<void>;

    "withdrawToWallet()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setAdmin(newAdmin: string, overrides?: Overrides): Promise<BigNumber>;

    "setAdmin(address)"(
      newAdmin: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setWallet(newWallet: string, overrides?: Overrides): Promise<BigNumber>;

    "setWallet(address)"(
      newWallet: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    "wallet()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToWallet(overrides?: Overrides): Promise<BigNumber>;

    "withdrawToWallet()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setAdmin(
      newAdmin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAdmin(address)"(
      newAdmin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setWallet(
      newWallet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setWallet(address)"(
      newWallet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wallet()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawToWallet(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawToWallet()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
