import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate',
})
export class MyDatePipe implements PipeTransform {
  transform(value: string): string {
    let date = new Date(value);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    let formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'numeric',
      year: 'numeric'      
    });
    return formattedDate; // MM/dd/yyyy
  }
}
