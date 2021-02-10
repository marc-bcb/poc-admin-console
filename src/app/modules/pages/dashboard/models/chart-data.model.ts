export interface ChartDataModel {
  approved: number;
  completed: number;
  data: {
    invited: Array<number>;
    completed: Array<number>;
    started: Array<number>;
  };
  notCompleted: number;
  rejected: number;
  started: number;
  total: number;
}
