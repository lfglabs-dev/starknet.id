export type ClickableIconProps = {
  color?: string;
  width: string;
  tokenId: string;
  domain?: string;
};

type ClickableChainIconProps = {
  addr: string;
  width: string;
  color?: string;
};

export type IconProps = {
  height?: string;
  width?: string;
  color?: string;
};

export type TransactionObject = {
  transaction_hash: string;
  block_hash?: string;
  block_number?: number;
  transaction_index: number;
  transaction_status: string;
  transaction_type: string;
  version: number;
  signature: any;
  max_fee: number;
  actual_fee: number;
  nonce: number;
  contract_address: string;
  entry_point_selector: string;
  entry_point_type: string;
  calldata: any;
  class_hash: string;
  sender_address: string;
  constructor_calldata: string;
  contract_address_salt: string[];
  timestamp: number;
  entry_point_selector_name: string;
  number_of_events: number;
  account_calls: any;
};

export type ActivityProps = {
  transaction_hash: string;
  block_number: number;
  contract_address: string;
  type: string;
  timestamp: number;
  date: string;
  index?: number;
};
