export interface EntityCardModel {
  profileId: string;
  name: string;
  cNumber: string;
  details: Array<{
    type: string;
    value: any;
  }>;
  flags?: Array<{
    type: string;
    value: any;
    status?: 'success' | 'in-progress' | 'warn' | 'danger' | 'unknown' | undefined;
  }>;
}
