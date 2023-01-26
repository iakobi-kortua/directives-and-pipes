import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesPipe',
})
export class namesArr implements PipeTransform {
  transform(value: any) {
    return `Users: ${value}`;
  }
}
