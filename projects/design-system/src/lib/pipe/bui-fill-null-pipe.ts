import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  pure: true,
  name: 'buiFillNull',
  standalone: true,
})
export class BuiFillNullPipe implements PipeTransform {
  transform(value: string | unknown | null | undefined, ...args: unknown[]): unknown {
    if (value === null || value === undefined || value === '') {
      return '-';
    }
    return value;
  }
}
