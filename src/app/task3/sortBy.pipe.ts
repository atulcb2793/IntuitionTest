import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortBy', pure: true })
export class SortByPipe implements PipeTransform {
  transform(items: any[]): any[] {
    if (!items) {
      return [];
    }

    items.sort((a, b) => {
      return a.name - b.name;
    });

    return items;
  }
}
