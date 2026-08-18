import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  pure: true,
  name: 'fillNull',
  standalone: true,
})
export class FillNullPipe implements PipeTransform {
  transform(value: string | unknown | null | undefined, ...args: unknown[]): unknown {
    if (value === null || value === undefined || value === '') {
      return '-';
    }
    return value;
  }
}
