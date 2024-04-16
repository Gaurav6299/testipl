import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  date: any;
  month: any;
  year: any;
  day: any;
  monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  daysList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  transform(value: any) {
    if (!value) return '';
    var dateString = value.split('/');
    var newDate = new Date(
      parseInt(dateString[2]),
      parseInt(dateString[1]) - 1,
      parseInt(dateString[0])
    );
    this.date = newDate.getDate();
    this.month = this.monthList[newDate.getMonth()];
    this.year = newDate.getFullYear();
    this.day = this.daysList[newDate.getDay()];

    let fullDate =
      this.date + ' ' + this.month + ', ' + this.year + ', ' + this.day;
    return fullDate;
  }
}
