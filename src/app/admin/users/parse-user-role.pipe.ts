import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseUserRole'
})
export class ParseUserRolePipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    if (value === true) {
      return 'Admin';
    } else {
      return 'Cashier';
    }
  }

}
