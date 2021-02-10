import {Moment, unitOfTime} from 'moment';

export class DateUtil {
  public static DATE_FORMAT = 'YYYY-MM-DD';
  public static DATE_PICKER_FORMAT = {
    parse: {
      dateInput: 'YYYY-MM-DD',
    },
    display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'YYYY-MM-DD',
      monthYearA11yLabel: 'MMMM DD',
    },
  };

  public static _getRangeOfDates(startDate: Moment, endDate: Moment, type: unitOfTime.Diff = 'days'): Array<Moment> {
    const diff: number = endDate.diff(startDate, type);
    const range: Array<Moment> = [];
    for (let i = 0; i < diff; i++) {
      range.push(startDate.clone().add(i, 'd'));
    }
    return range;
  }
}
