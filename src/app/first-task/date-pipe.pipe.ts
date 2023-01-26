import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class datePipe implements PipeTransform {
  transform(value: any) {
    const d = new Date();
    let year = d.getFullYear();
    return year - value;
  }
}
