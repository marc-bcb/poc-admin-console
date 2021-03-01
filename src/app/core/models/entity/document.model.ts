export interface DocumentModel {
  id: string;
  entity_id: number;
  document: string;
  filename: string;
  content_type: string;
  type: string;
  side: string;
  created_at: Date;
}
