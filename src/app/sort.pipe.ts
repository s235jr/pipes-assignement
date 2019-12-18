import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propertyName: string): any {

    function compare(a, b) {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (a[propertyName] > b[propertyName]) {
        return 1;
      }
      return 0;
    }

    //return value.sort(compare);
    return value.sort((a, b) => (a[propertyName] > b[propertyName]) ? 1 : (a[propertyName] < b[propertyName]) ? -1 : 0);
  }

}
