import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: string): string {
    if(value.includes('+')){
    return '+$' + value.split('').filter(character => character != '+').join('');
    }
    if(value.includes('-')){
      return '-$' + value.split('').filter(character => character != '-').join('');
    }else return value;
  }
}
