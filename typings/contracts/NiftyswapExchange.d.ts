/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface NiftyswapExchangeInterface extends Interface {
  functions: {
    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;

    setApprovalForAll: TypedFunctionDescription<{
      encode([_operator, _approved]: [string, boolean]): string;
    }>;

    metaSafeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _isGasFee, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        boolean,
        Arrayish
      ]): string;
    }>;

    metaSafeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _isGasFee, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        Arrayish
      ]): string;
    }>;

    safeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    metaSetApprovalForAll: TypedFunctionDescription<{
      encode([_owner, _operator, _approved, _isGasFee, _data]: [
        string,
        string,
        boolean,
        boolean,
        Arrayish
      ]): string;
    }>;

    onERC1155BatchReceived: TypedFunctionDescription<{
      encode([_operator, _from, _ids, _amounts, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;

    onERC1155Received: TypedFunctionDescription<{
      encode([_operator, _from, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {
    TokensPurchase: TypedEventDescription<{
      encodeTopics([
        buyer,
        tokensBoughtIds,
        tokensBoughtAmounts,
        baseTokensSoldAmounts
      ]: [string | null, null, null, null]): string[];
    }>;

    BaseTokenPurchase: TypedEventDescription<{
      encodeTopics([
        buyer,
        tokensSoldIds,
        tokensSoldAmounts,
        baseTokensBoughtAmounts
      ]: [string | null, null, null, null]): string[];
    }>;

    AddLiquidity: TypedEventDescription<{
      encodeTopics([provider, tokenIds, tokenAmounts, baseTokenAmounts]: [
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    RemoveLiquidity: TypedEventDescription<{
      encodeTopics([provider, tokenIds, tokenAmounts, baseTokenAmounts]: [
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    TransferSingle: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _id, _amount]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    TransferBatch: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _ids, _amounts]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    ApprovalForAll: TypedEventDescription<{
      encodeTopics([_owner, _operator, _approved]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    URI: TypedEventDescription<{
      encodeTopics([_uri, _id]: [null, BigNumberish | null]): string[];
    }>;
  };
}

export class NiftyswapExchange extends Contract {
  connect(signerOrProvider: Signer | Provider | string): NiftyswapExchange;
  attach(addressOrName: string): NiftyswapExchange;
  deployed(): Promise<NiftyswapExchange>;

  on(event: EventFilter | string, listener: Listener): NiftyswapExchange;
  once(event: EventFilter | string, listener: Listener): NiftyswapExchange;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): NiftyswapExchange;
  removeAllListeners(eventName: EventFilter | string): NiftyswapExchange;
  removeListener(eventName: any, listener: Listener): NiftyswapExchange;

  interface: NiftyswapExchangeInterface;

  functions: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    uri(_id: BigNumberish): Promise<string>;

    getNonce(_signer: string): Promise<BigNumber>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[]
    ): Promise<(BigNumber)[]>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    isValidSignature(
      _signerAddress: string,
      _hash: Arrayish,
      _data: Arrayish,
      _sig: Arrayish
    ): Promise<boolean>;

    getBuyPrice(
      _assetBoughtAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish
    ): Promise<BigNumber>;

    getSellPrice(
      _assetSoldAmount: BigNumberish,
      _assetSoldReserve: BigNumberish,
      _assetBoughtReserve: BigNumberish
    ): Promise<BigNumber>;

    getBaseTokenReserve(_id: BigNumberish): Promise<BigNumber>;

    getPrice_baseToToken(
      _id: BigNumberish,
      _tokensBought: BigNumberish
    ): Promise<BigNumber>;

    getPrice_tokenToBase(
      _id: BigNumberish,
      _tokensSold: BigNumberish
    ): Promise<BigNumber>;

    supportsInterface(interfaceID: Arrayish): Promise<boolean>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenAddress(): Promise<string>;
    factoryAddress(): Promise<string>;
  };

  filters: {
    TokensPurchase(
      buyer: string | null,
      tokensBoughtIds: null,
      tokensBoughtAmounts: null,
      baseTokensSoldAmounts: null
    ): EventFilter;

    BaseTokenPurchase(
      buyer: string | null,
      tokensSoldIds: null,
      tokensSoldAmounts: null,
      baseTokensBoughtAmounts: null
    ): EventFilter;

    AddLiquidity(
      provider: string | null,
      tokenIds: null,
      tokenAmounts: null,
      baseTokenAmounts: null
    ): EventFilter;

    RemoveLiquidity(
      provider: string | null,
      tokenIds: null,
      tokenAmounts: null,
      baseTokenAmounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimate: {
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;
  };
}
