import {EntityProfileModel} from './entity-profile.model';
import {PartnerModel} from '../Partners/partner.model';
import {DocumentModel} from './document.model';
import {AddressModel} from './address.model';
import {BankAccountModel} from './bank-account.model';
import {RiskLevelType} from './risk-level-type.enum';

export interface EntityModel {
  id: string;
  status: string;
  type: string;
  first_name: string;
  middle_names: string;
  last_name: string;
  parent_id: any;
  email: string;
  checks: any[];
  check: any;
  mobile: string;
  entity_name: string;
  approved: boolean;
  can_trade: boolean;
  created_at: Date;
  gender: string;
  kyc_status: string;
  dob: Date;
  profile: EntityProfileModel;
  partners: PartnerModel[];
  documents: DocumentModel[];
  corporateEntities?: EntityModel[];
  readonly archived: boolean;
  individualEntities?: EntityModel[];
  address: AddressModel;
  bank_account: BankAccountModel;
  risk_level: RiskLevelType;
  products?: any;
  is_manual_capture?: boolean;
}
