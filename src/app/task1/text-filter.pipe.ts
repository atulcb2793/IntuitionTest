import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textFilter', pure: true })
export class TextFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((one) => {
      return one.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
