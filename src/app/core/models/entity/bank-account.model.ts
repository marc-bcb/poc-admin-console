export interface BankAccountModel {
  name: string;
  address: string;
  entity_id?: string;
  ccy: string;
  method: string;
  account_number: string;
  iban: string;
  bic: string;
  reference: string;
  sortcode: string;
  country: string;
}
