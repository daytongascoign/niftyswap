/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Erc1155MetaPackedBalanceInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "getIDBinIndex(uint256)": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "getValueInBin(uint256,uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isValidSignature(address,bytes32,bytes,bytes)": FunctionFragment;
    "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)": FunctionFragment;
    "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)": FunctionFragment;
    "metaSetApprovalForAll(address,address,bool,bool,bytes)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getIDBinIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getValueInBin",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "metaSafeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "metaSafeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "metaSetApprovalForAll",
    values: [string, string, boolean, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIDBinIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getValueInBin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metaSafeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metaSafeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metaSetApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "NonceChange(address,uint256)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export class Erc1155MetaPackedBalance extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Erc1155MetaPackedBalanceInterface;

  functions: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    getIDBinIndex(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getNonce(
      _signer: string,
      overrides?: CallOverrides
    ): Promise<{
      nonce: BigNumber;
      0: BigNumber;
    }>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<{
      isOperator: boolean;
      0: boolean;
    }>;

    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      isValid: boolean;
      0: boolean;
    }>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  balanceOf(
    _owner: string,
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    _owners: string[],
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getIDBinIndex(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    bin: BigNumber;
    index: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  getNonce(_signer: string, overrides?: CallOverrides): Promise<BigNumber>;

  getValueInBin(
    _binValues: BigNumberish,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isApprovedForAll(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidSignature(
    _signerAddress: string,
    _hash: BytesLike,
    _data: BytesLike,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  metaSafeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  metaSafeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  metaSetApprovalForAll(
    _owner: string,
    _operator: string,
    _approved: boolean,
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  staticCall: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getIDBinIndex(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getNonce(_signer: string, overrides?: CallOverrides): Promise<BigNumber>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<void>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    NonceChange(signer: string | null, newNonce: null): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    URI(_amount: null, _id: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;
    balanceOfBatch(_owners: string[], _ids: BigNumberish[]): Promise<BigNumber>;
    getIDBinIndex(_id: BigNumberish): Promise<BigNumber>;
    getNonce(_signer: string): Promise<BigNumber>;
    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish
    ): Promise<BigNumber>;
    isApprovedForAll(_owner: string, _operator: string): Promise<BigNumber>;
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike
    ): Promise<BigNumber>;
    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike
    ): Promise<BigNumber>;
    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike
    ): Promise<BigNumber>;
    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike
    ): Promise<BigNumber>;
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ): Promise<BigNumber>;
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<BigNumber>;
    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;
    supportsInterface(_interfaceID: BytesLike): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<PopulatedTransaction>;
    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[]
    ): Promise<PopulatedTransaction>;
    getIDBinIndex(_id: BigNumberish): Promise<PopulatedTransaction>;
    getNonce(_signer: string): Promise<PopulatedTransaction>;
    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish
    ): Promise<PopulatedTransaction>;
    isApprovedForAll(
      _owner: string,
      _operator: string
    ): Promise<PopulatedTransaction>;
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike
    ): Promise<PopulatedTransaction>;
    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<PopulatedTransaction>;
    supportsInterface(_interfaceID: BytesLike): Promise<PopulatedTransaction>;
  };
}
