/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { SignatureValidator } from "./SignatureValidator";

export class SignatureValidatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SignatureValidator> {
    return super.deploy(overrides || {}) as Promise<SignatureValidator>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SignatureValidator {
    return super.attach(address) as SignatureValidator;
  }
  connect(signer: Signer): SignatureValidatorFactory {
    return super.connect(signer) as SignatureValidatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureValidator {
    return new Contract(address, _abi, signerOrProvider) as SignatureValidator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes"
      }
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a3f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fa4e12d714610030575b600080fd5b6101726004803603608081101561004657600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561007657600080fd5b82018360208201111561008857600080fd5b803590602001918460018302840111640100000000831117156100aa57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156100fd57600080fd5b82018360208201111561010f57600080fd5b8035906020019184600183028401116401000000008311171561013157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610186945050505050565b604080519115158252519081900360200190f35b6000808251116101c75760405162461bcd60e51b815260040180806020018281038252604381526020018061098b6043913960600191505060405180910390fd5b6001600160a01b03851661020c5760405162461bcd60e51b81526004018080602001828103825260338152602001806109586033913960400191505060405180910390fd5b6000610217836107be565b60f81c90506005811061025b5760405162461bcd60e51b815260040180806020018281038252603a8152602001806108b1603a913960400191505060405180910390fd5b60008160ff16600581111561026c57fe5b905060008080808085600581111561028057fe5b14156102bd5760405162461bcd60e51b81526004018080602001828103825260368152602001806108eb6036913960400191505060405180910390fd5b60018560058111156102cb57fe5b14156103ce5787516061146103115760405162461bcd60e51b81526004018080602001828103825260378152602001806109216037913960400191505060405180910390fd5b61032288600063ffffffff61082b16565b925061033588602063ffffffff61082b16565b91508760408151811061034457fe5b0160209081015160408051600081528084018083528e905260f89290921c8282018190526060830187905260808301869052905190965060019260a0808401939192601f1981019281900390910190855afa1580156103a7573d6000803e3d6000fd5b5050604051601f1901516001600160a01b038d811691161497506107b69650505050505050565b60028560058111156103dc57fe5b14156105005787516061146104225760405162461bcd60e51b81526004018080602001828103825260378152602001806109216037913960400191505060405180910390fd5b61043388600063ffffffff61082b16565b925061044688602063ffffffff61082b16565b91508760408151811061045557fe5b01602090810151604080517f19457468657265756d205369676e6564204d6573736167653a0a33320000000081850152603c8082018f905282518083039091018152605c82018084528151918601919091206000909152607c82018084525260f89290921c609c830181905260bc830187905260dc8301869052905190965060019260fc808401939192601f1981019281900390910190855afa1580156103a7573d6000803e3d6000fd5b600385600581111561050e57fe5b141561066f57604080516320c13b0b60e01b8152600481019182528a5160448201528a516001600160a01b038e16926320c13b0b928d928d92918291602482019160640190602087019080838360005b8381101561057657818101518382015260200161055e565b50505050905090810190601f1680156105a35780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156105d65781810151838201526020016105be565b50505050905090810190601f1680156106035780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b15801561062257600080fd5b505afa158015610636573d6000803e3d6000fd5b505050506040513d602081101561064c57600080fd5b50516001600160e01b0319166320c13b0b60e01b1496506107b695505050505050565b600485600581111561067d57fe5b141561077f5760408051630b135d3f60e11b8152600481018c8152602482019283528a5160448301528a516001600160a01b038f1693631626ba7e938f938e9390929160640190602085019080838360005b838110156106e75781810151838201526020016106cf565b50505050905090810190601f1680156107145780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b15801561073257600080fd5b505afa158015610746573d6000803e3d6000fd5b505050506040513d602081101561075c57600080fd5b50516001600160e01b031916630b135d3f60e11b1496506107b695505050505050565b60405162461bcd60e51b815260040180806020018281038252603a8152602001806108b1603a913960400191505060405180910390fd5b949350505050565b6000808251116107ff5760405162461bcd60e51b815260040180806020018281038252603781526020018061087a6037913960400191505060405180910390fd5b8160018351038151811061080f57fe5b0160200151825160001901909252506001600160f81b03191690565b600081602001835110156108705760405162461bcd60e51b815260040180806020018281038252603c8152602001806109ce603c913960400191505060405180910390fd5b5001602001519056fe4c6962427974657323706f704c617374427974653a20475245415445525f5448414e5f5a45524f5f4c454e4754485f52455155495245445369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20554e535550504f525445445f5349474e41545552455369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20494c4c4547414c5f5349474e41545552455369676e617475726556616c696461746f7223697356616c69645369676e61747572653a204c454e4754485f39375f52455155495245445369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20494e56414c49445f5349474e45525369676e617475726556616c696461746f7223697356616c69645369676e61747572653a204c454e4754485f475245415445525f5448414e5f305f52455155495245444c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f5245515549524544a2646970667358221220aadd8644d82980441c30b6da22f5a64c20b39aaabe40d14c3ed9ce2ebfc5b1ff64736f6c63430006080033";
