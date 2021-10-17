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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SafeMathInterface extends ethers.utils.Interface {
  functions: {
    "safeSub(uint256,uint256)": FunctionFragment;
    "safeDiv(uint256,uint256)": FunctionFragment;
    "safeMul(uint256,uint256)": FunctionFragment;
    "safeAdd(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "safeSub",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeDiv",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeAdd",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "safeSub", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeDiv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeAdd", data: BytesLike): Result;

  events: {};
}

export class SafeMath extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SafeMathInterface;

  functions: {
    safeSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;

    "safeSub(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;

    safeDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;

    "safeDiv(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;

    safeMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;

    "safeMul(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;

    safeAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;

    "safeAdd(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      c: BigNumber;
      0: BigNumber;
    }>;
  };

  safeSub(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "safeSub(uint256,uint256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  safeDiv(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "safeDiv(uint256,uint256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  safeMul(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "safeMul(uint256,uint256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  safeAdd(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "safeAdd(uint256,uint256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    safeSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeSub(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeDiv(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeMul(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeAdd(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    safeSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeSub(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeDiv(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeMul(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeAdd(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    safeSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeSub(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeDiv(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeMul(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeAdd(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}