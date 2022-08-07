// nspv settings
// export const TICKER = 'TKLTEST';
// export const RPC_PORT = '22025';
export const TICKER = 'TKL';
export const RPC_PORT = '29405';
export const BITGO_IPC_ID = 'bitgo';
export const IPFS_IPC_ID = 'ipfs';
export const DEEP_LINK_IPC_ID = 'link';
export const VERSIONS_MSG = 'version';
export const DEEP_LINK_PROTOCOL = 'tokel://';
export enum IpfsAction {
  GET = 'get',
}

// TODO move to user settings?
export const DEFAULT_IPFS_FALLBACK_GATEWAY = 'https://ipfs.io/ipfs';

export const TOKEL_PRICE_URL = 'http://price.tokel.io';
export const TOKEL_PRICE_UPDATE_PERIOD_MS = 7_200_000; // two hours

export const TOPBAR_HEIGHT_PX = 38;
export const PORTFOLIO_ITEM_HEIGHT_PX = 86;
export const FEE = 0.0001;
export const TOKEN_MARKER_FEE = 0.0001;
export const FIAT_CURRENCY = 'USD';
export const USD_VALUE = 5;
export const IS_DEV = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
export const IS_PROD = process.env.NODE_ENV === 'production';
export const SATOSHIS = 100000000;

export const TOKEN_WHITE_LIST_LOCATION = 'token_white_list';

export enum NetworkType {
  TOKEL = 'TOKEL',
  TKLTEST = 'TKLTEST2',
}

export const DEFAULT_NETWORK = IS_DEV ? NetworkType.TKLTEST : NetworkType.TOKEL;

export const EXTRACT_IPFS_HASH_REGEX =
  /^(?:https:\/\/ipfs.io\/ipfs\/|ipfs:\/\/|dweb:\/\/)([a-zA-Z0-9]*$)/;

export const TokenFilter = {
  ALL: 'ALL',
  NFT: 'NFTS',
  FIXED_SUPPLY: 'FIXED SUPPLY',
};

export enum ResourceType {
  TOKEL = 'tkl',
  NFT = 'nft',
  FST = 'tokens',
}

export const WindowSize = {
  XL: 1440,
  L: 1024,
  M: 760,
  S: 420,
};

export const WindowControl = {
  CLOSE: 'close',
  MIN: 'minimize',
  MAX: 'maximize',
};

export enum ViewType {
  DASHBOARD = 'dashboard',
  SWAP = 'swap',
  DEX = 'dex',
  CREATE_TOKEN = 'create_token',
  SETTINGS = 'settings',
}

export enum ModalName {
  RECEIVE = 'receive',
  SEND = 'send',
  FEEDBACK = 'feedback',
  TX_DETAIL = 'tx_detail',
  TOKEN_SEND = 'token_send',
  CONFIRM_TOKEN_CREATION = 'confirm_token_creation',
  TOKEN_CREATED = 'token_created',
  IPFS_EXPLAINER = 'ipfs_explainer',
  CONFIRM_MARKET_ORDER = 'confirm_market_order',
  CONFIRM_CANCEL_MARKET_ORDER = 'confirm_cancel_market_order',
  MARKET_ORDER_SENT = 'market_order_sent',
}

export const Config = {
  DECIMAL: 8,
  DECIMAL_FIAT: 6,
};

export const Colors = {
  WHITE: 'white',
  GRAY: 'gray',
  BLACK: 'black',
  PURPLE: 'purple',
  TRANSPARENT: 'transparent',
  DANGER: 'danger',
  SUCCESS: 'success',
};

export const OsType = {
  LINUX: 'Linux',
  MAC: 'Darwin',
  WINDOWS: 'Windows_NT',
};

// https://datatracker.ietf.org/doc/html/rfc6838
export const mediaTypes = <const>['audio', 'video', 'image', 'ipfs'];

export const SEE_EXPLORER = 'See explorer link for details';

export const INFORMATION_N_A = 'This information is currently not available';

export const NspvErrors = {
  INVALID_ADDR_AMOUNT_SMALL: 'invalid address or amount too small',
};

export const ErrorMessages = {
  ENTER_WIF: 'Please enter WIF',
  NETWORK_ISSUES: 'You are experiencing network issues. Please restart the app and try again',
  INVALID_ADDRESS: 'Entered address is not valid. Please check it and try again',
};

export const NspvJSErrorMessages = {
  'invalid destination pubkey': 'Invalid token address (pubkey). Please try again.',
  'could not find normal inputs': 'Not enough TKL for this transaction',
};

export const HTTP_ERR_405 = 'Request failed with status code 405';

export const RESERVED_TOKEL_ARBITRARY_KEYS = [
  'collection_name',
  'number_in_collection',
  'constellation_name',
  'number_in_constellation',
];

export const HIDE_IPFS_EXPLAINER_KEY = 'HIDE_IPFS_EXPLAINER';

export const SPENDABLE = 'Spendable';
export const LOCKED = 'Locked';
