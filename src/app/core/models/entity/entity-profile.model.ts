import {EntityModel} from './entity.model';
import {DocumentModel} from './document.model';

export interface EntityProfileModel {
  id: string;
  entity_id: string;
  parent_id: string;
  dob: Date;
  gender: string;
  ccy: string;
  bank_name: string;
  bank_address: string;
  bank_ccy: string;
  bank_method: string;
  bank_account: string;
  bank_sortcode: string;
  bank_iban: string;
  bank_bic: string;
  bank_reference: string;
  bank_country: string;
  status: string;
  type: string;
  shares: string;
  title: string;
  onboarding: any;
  first_name: string;
  middle_names: string;
  last_name: string;
  email: string;
  mobile: string;
  entity_name: string;
  approved: boolean;
  can_trade: boolean;
  onboarded_at: Date;
  onboarding_started_at: Date;
  created_at: Date;
  documents: DocumentModel[];
  entity: EntityModel;
  check: any;
}
