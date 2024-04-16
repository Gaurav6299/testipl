import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any) {
    if(!value) return ''
    var dataString=value.split('<br/>')
    return dataString[0]
  }

}
