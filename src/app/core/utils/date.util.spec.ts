import moment, {Moment} from 'moment';
import {DateUtil} from './date.util';

describe('_getRangeOfDates', () => {
  it('should return date range breakdown in days by default', () => {
    // prep
    const start: Moment = moment(new Date('2021/01/01'));
    const end: Moment = moment(new Date('2021/01/05'));
    const unit = undefined;
    // execute
    const out = DateUtil._getRangeOfDates(start, end, unit);
    // assert
    expect(out.length).toEqual(4);
  });

  it('should return date range breakdown in days', () => {
    // prep
    const start: Moment = moment(new Date('2021/01/01'));
    const end: Moment = moment(new Date('2021/01/05'));
    const unit = 'days';
    // execute
    const out = DateUtil._getRangeOfDates(start, end, unit);
    // assert
    expect(out.length).toEqual(4);
  });

  it('should return date range breakdown in weeks', () => {
    // prep
    const start: Moment = moment(new Date('2021/01/01'));
    const end: Moment = moment(new Date('2021/01/10'));
    const unit = 'weeks';
    // execute
    const out = DateUtil._getRangeOfDates(start, end, unit);
    // assert
    expect(out.length).toEqual(1);
  });

  it('should return date range breakdown in months', () => {
    // prep
    const start: Moment = moment(new Date('2021/01/01'));
    const end: Moment = moment(new Date('2021/05/01'));
    const unit = 'months';
    // execute
    const out = DateUtil._getRangeOfDates(start, end, unit);
    // assert
    expect(out.length).toEqual(4);
  });
});
