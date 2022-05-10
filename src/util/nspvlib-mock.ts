import BN from 'bn.js';

export const getNewAddress = async (fail = false) => {
  if (fail) {
    throw new Error('Incorrect login details');
  }
  return {
    address: 'RJfjdEYQPzbKtENYqRsJF6qpkhVrwGwZxU',
    compressed: 1,
    pubkey: '0376094fff1d654f441f82b2a73e1a5769fd67ca9c95bfd03d381e05491aca814d',
    seed: '1484 1333 615 1854 1035 383 766 506 782 124 317 2040 788 405 1132 2014 1727 258 393 17 748 1111 1920',
    wif: 'Uq6Hy34eqi3W35q8qY8BGqTp8Lr2WWAjcFftJ2YfvBh5UseskYUM',
    wifprefix: 188,
  };
};

export const login = async (key, fail = false) => {
  console.log(key);
  if (fail) {
    throw new Error('Incorrect login details');
  }
  return {
    address: 'RVK1UNQtkcwZ2yJLBQXqEPbjDHrHhHCUeh',
    compressed: 0,
    pubkey: '038db9c6b1dd82536b929abec5363fdfa49946b8a7d068f10f6d4b5d12d3033434',
    result: 'success',
    status: 'wif will expire in 777 seconds',
    wifprefix: 0,
  };
};

export interface UtxoType {
  txid: string;
  satoshis: BN;
  extradata: BN;
  vout: number;
  height: number;
  script: Buffer;
  nLockTime: string;
}

export interface UnspentType {
  result: string;
  address: string;
  height: number;
  numutxos: number;
  balance: number;
  skipcount: number;
  filter: number;
  lastpeer: string;
  tokens: { [key: string]: number };
  utxos: UtxoType[];
}

export interface TokenUtxoDataType {
  evalcode: number;
  version: number;
  pubkeys: [string];
  tokenid: string;
}

export interface TxType {
  height?: number;
  txid?: string;
  value: BN;
  vin?: number;
  received?: boolean;
  recipient?: string;
  tx?: string;
  unconfirmed: boolean;
  from: Array<string>;
  timestamp: number;
}

export const listUnspent = async (fail = false): Promise<UnspentType> => {
  if (fail) {
    throw new Error('Incorrect login details');
  }
  return {
    result: 'success',
    address: 'RKagfH9Fjcm2ddaDRcc3FfmrAViBzApXfp',
    height: 2296137,
    numutxos: 1,
    balance: 1,
    skipcount: 0,
    filter: 0,
    lastpeer: '136.243.58.134:7770',
    tokens: { '123123': 1 },
    utxos: [
      {
        txid: 'fh823fhi23h9238fh2938',
        satoshis: new BN('2'),
        extradata: new BN('123'),
        vout: 0,
        height: 123123,
        script: Buffer.from('hello'),
        nLockTime: '123123123',
      },
    ],
  };
};
