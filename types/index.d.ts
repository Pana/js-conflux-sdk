import { EpochNumber, Block, TransactionConfig, Transaction as txStruct, TransactionReceipt } from "./rpc";
export * from "./rpc"

type str0num = string | number;  // string or number
type str0buf = string | Buffer;

export interface ConfluxOption {
    url: string,
    defaultEpoch: string | number,  // default 'latest_state'
    defaultGasPrice: string | number,
    defaultGas: string | number,
    defaultStorageLimit: string | number,
    defaultChainId: number,
}

type Provider = any;

export class Conflux {
    constructor(options: ConfluxOption);
    provider: Provider;
    defaultEpoch: str0num;
    defaultGasPrice: str0num;
    defaultGas: str0num;
    defaultStorageLimit: str0num;
    defaultChainId: number;

    setProvider(provider: Provider): Provider;
    Account(privateKey: string): any;
    Contract(options: any): any;
    close(): any;

    getStatus(): Promise<any>;
    getGasPrice(): string;
    getEpochNumber(epochNumber?: EpochNumber): Promise<number>;
    getLogs(options: any): any;
    getBalance(address: string, epochNumber: EpochNumber): Promise<number>;
    getNextNonce(): Promise<number>;
    getConfirmationRiskByHash(): Promise<number | null>;
    getBlockByEpochNumber(epochNumber: EpochNumber | null, detail?: boolean): Promise<Block | null>;
    getBlocksByEpochNumber(): Promise<string[]>;
    getBestBlockHash(): string;
    getBlockByHash(): Promise<object | null>;
    getBlockByHashWithPivotAssumption(): any;
    getTransactionByHash(txhash: string): Promise<txStruct | null>;
    getTransactionReceipt(txhash: string): Promise<TransactionReceipt | null>;
    sendTransaction(tx: TransactionConfig, password?: string): Promise<any>;
    sendRawTransaction(): any;
    getCode(address: string): Promise<string>;
    call(): Promise<string>;
    estimateGasAndCollateral(options: any): Promise<object>;
}

export class Account {
    constructor(privateKey: string);

    privateKey: any;
    publicKey: any;
    address: any;

    static random: (entropy: any) => Account;
    static decrypt: (password: string, info: any) => Account;

    encrypt(password: string): any;
    signTransaction(options: any): any;
    signMessage(message: string): any;
    toString(): string;
}

export class Message {
    constructor(message: string);

    static sign: (privateKey: any, messageHash: any) => string;
    static recover: (signature: any, messageHash: any) => any;

    sign(privateKey: any): Message;
    // get: from, r, s, v, hash
}

export interface TransactionOption {
    nonce: str0num;
    gasPrice: str0num;
    gas: str0num;
    to: string;
    value: str0num;
    storageLimit: str0num;
    epochHeight: str0num;
    chainId: str0num;
    data: str0buf;
    r: str0buf;
    s: str0buf;
    v: number;
}

export class Transaction {
    constructor(options: any);

    // get: hash, from
    sign(privateKey: string): Transaction;
    recover(): string;
    encode(includeSignature: boolean): Buffer;
    serialize(): string;
}

export class BaseProvider {
    constructor(url: string, options: any);
    url: string;
    timeout: number;
    logger: any;

    requestId(): string;
    call(): any;
    close(): any;
}

export class HttpProvider {
    constructor(url: string, options: any);
    call(method: string, params: any): any;    // params 是多个参数
}

export interface ContractOption {
    abi: [];
    address: string;
    bytecode: string;
}

export class Contract {
    constructor(cfx: Conflux, options: ContractOption);
    abi: any;
    address: string;
}