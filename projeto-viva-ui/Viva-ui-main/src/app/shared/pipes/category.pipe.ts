import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  
  transform(value: string): string {
    switch (value) {
      case 'terceiros':
        return 'code';
      case 'proprio':
        return 'computer';
    }
    return 'code';
  }
}
