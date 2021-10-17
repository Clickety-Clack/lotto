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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LotteryInterface extends ethers.utils.Interface {
  functions: {
    "isLotteryLive()": FunctionFragment;
    "declareWinner()": FunctionFragment;
    "participate(string)": FunctionFragment;
    "lotteryName()": FunctionFragment;
    "manager()": FunctionFragment;
    "addressIndexes(uint256)": FunctionFragment;
    "getPlayer(address)": FunctionFragment;
    "ethToParticipate()": FunctionFragment;
    "maxEntriesForPlayer()": FunctionFragment;
    "getPlayers()": FunctionFragment;
    "activateLottery(uint256,uint256)": FunctionFragment;
    "getWinningPrice()": FunctionFragment;
    "winner()": FunctionFragment;
    "lotteryBag(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isLotteryLive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "declareWinner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "participate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lotteryName",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addressIndexes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPlayer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ethToParticipate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxEntriesForPlayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activateLottery",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWinningPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "winner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lotteryBag",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "isLotteryLive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "declareWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "participate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressIndexes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPlayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ethToParticipate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxEntriesForPlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPlayers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "activateLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWinningPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lotteryBag", data: BytesLike): Result;

  events: {
    "WinnerDeclared(string,uint256)": EventFragment;
    "PlayerParticipated(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WinnerDeclared"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerParticipated"): EventFragment;
}

export class Lottery extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LotteryInterface;

  functions: {
    isLotteryLive(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isLotteryLive()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    declareWinner(overrides?: Overrides): Promise<ContractTransaction>;

    "declareWinner()"(overrides?: Overrides): Promise<ContractTransaction>;

    participate(
      playerName: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "participate(string)"(
      playerName: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    lotteryName(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "lotteryName()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    manager(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "manager()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    addressIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "addressIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getPlayer(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: BigNumber;
    }>;

    "getPlayer(address)"(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: BigNumber;
    }>;

    ethToParticipate(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "ethToParticipate()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    maxEntriesForPlayer(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "maxEntriesForPlayer()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getPlayers(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    "getPlayers()"(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    activateLottery(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "activateLottery(uint256,uint256)"(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getWinningPrice(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getWinningPrice()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    winner(overrides?: CallOverrides): Promise<{
      name: string;
      entryCount: BigNumber;
      index: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    "winner()"(overrides?: CallOverrides): Promise<{
      name: string;
      entryCount: BigNumber;
      index: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    lotteryBag(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "lotteryBag(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  isLotteryLive(overrides?: CallOverrides): Promise<boolean>;

  "isLotteryLive()"(overrides?: CallOverrides): Promise<boolean>;

  declareWinner(overrides?: Overrides): Promise<ContractTransaction>;

  "declareWinner()"(overrides?: Overrides): Promise<ContractTransaction>;

  participate(
    playerName: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "participate(string)"(
    playerName: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  lotteryName(overrides?: CallOverrides): Promise<string>;

  "lotteryName()"(overrides?: CallOverrides): Promise<string>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  addressIndexes(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "addressIndexes(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPlayer(
    playerAddress: string,
    overrides?: CallOverrides
  ): Promise<{
    0: string;
    1: BigNumber;
  }>;

  "getPlayer(address)"(
    playerAddress: string,
    overrides?: CallOverrides
  ): Promise<{
    0: string;
    1: BigNumber;
  }>;

  ethToParticipate(overrides?: CallOverrides): Promise<BigNumber>;

  "ethToParticipate()"(overrides?: CallOverrides): Promise<BigNumber>;

  maxEntriesForPlayer(overrides?: CallOverrides): Promise<BigNumber>;

  "maxEntriesForPlayer()"(overrides?: CallOverrides): Promise<BigNumber>;

  getPlayers(overrides?: CallOverrides): Promise<string[]>;

  "getPlayers()"(overrides?: CallOverrides): Promise<string[]>;

  activateLottery(
    maxEntries: BigNumberish,
    ethRequired: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "activateLottery(uint256,uint256)"(
    maxEntries: BigNumberish,
    ethRequired: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getWinningPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getWinningPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  winner(overrides?: CallOverrides): Promise<{
    name: string;
    entryCount: BigNumber;
    index: BigNumber;
    0: string;
    1: BigNumber;
    2: BigNumber;
  }>;

  "winner()"(overrides?: CallOverrides): Promise<{
    name: string;
    entryCount: BigNumber;
    index: BigNumber;
    0: string;
    1: BigNumber;
    2: BigNumber;
  }>;

  lotteryBag(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "lotteryBag(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    isLotteryLive(overrides?: CallOverrides): Promise<boolean>;

    "isLotteryLive()"(overrides?: CallOverrides): Promise<boolean>;

    declareWinner(overrides?: CallOverrides): Promise<void>;

    "declareWinner()"(overrides?: CallOverrides): Promise<void>;

    participate(playerName: string, overrides?: CallOverrides): Promise<void>;

    "participate(string)"(
      playerName: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lotteryName(overrides?: CallOverrides): Promise<string>;

    "lotteryName()"(overrides?: CallOverrides): Promise<string>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    addressIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "addressIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPlayer(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: BigNumber;
    }>;

    "getPlayer(address)"(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: BigNumber;
    }>;

    ethToParticipate(overrides?: CallOverrides): Promise<BigNumber>;

    "ethToParticipate()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxEntriesForPlayer(overrides?: CallOverrides): Promise<BigNumber>;

    "maxEntriesForPlayer()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayers(overrides?: CallOverrides): Promise<string[]>;

    "getPlayers()"(overrides?: CallOverrides): Promise<string[]>;

    activateLottery(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "activateLottery(uint256,uint256)"(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getWinningPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getWinningPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    winner(overrides?: CallOverrides): Promise<{
      name: string;
      entryCount: BigNumber;
      index: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    "winner()"(overrides?: CallOverrides): Promise<{
      name: string;
      entryCount: BigNumber;
      index: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    lotteryBag(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "lotteryBag(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    WinnerDeclared(name: null, entryCount: null): EventFilter;

    PlayerParticipated(name: null, entryCount: null): EventFilter;
  };

  estimateGas: {
    isLotteryLive(overrides?: CallOverrides): Promise<BigNumber>;

    "isLotteryLive()"(overrides?: CallOverrides): Promise<BigNumber>;

    declareWinner(overrides?: Overrides): Promise<BigNumber>;

    "declareWinner()"(overrides?: Overrides): Promise<BigNumber>;

    participate(
      playerName: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "participate(string)"(
      playerName: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    lotteryName(overrides?: CallOverrides): Promise<BigNumber>;

    "lotteryName()"(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    addressIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlayer(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPlayer(address)"(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ethToParticipate(overrides?: CallOverrides): Promise<BigNumber>;

    "ethToParticipate()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxEntriesForPlayer(overrides?: CallOverrides): Promise<BigNumber>;

    "maxEntriesForPlayer()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayers(overrides?: CallOverrides): Promise<BigNumber>;

    "getPlayers()"(overrides?: CallOverrides): Promise<BigNumber>;

    activateLottery(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "activateLottery(uint256,uint256)"(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getWinningPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getWinningPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    winner(overrides?: CallOverrides): Promise<BigNumber>;

    "winner()"(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryBag(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lotteryBag(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isLotteryLive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isLotteryLive()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    declareWinner(overrides?: Overrides): Promise<PopulatedTransaction>;

    "declareWinner()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    participate(
      playerName: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "participate(string)"(
      playerName: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    lotteryName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lotteryName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressIndexes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addressIndexes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlayer(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlayer(address)"(
      playerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethToParticipate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ethToParticipate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxEntriesForPlayer(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxEntriesForPlayer()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlayers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPlayers()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activateLottery(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "activateLottery(uint256,uint256)"(
      maxEntries: BigNumberish,
      ethRequired: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getWinningPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getWinningPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    winner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "winner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteryBag(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lotteryBag(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}