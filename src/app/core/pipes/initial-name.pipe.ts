import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialName',
  standalone: true
})
export class InitialNamePipe implements PipeTransform {

  transform(value:
    string): string {
    if (!value) {
      return '';
    }

    const
      words = value.split(' ');
    const initials = words.map(word => word[0]);
    return initials.join('');
  }

}
