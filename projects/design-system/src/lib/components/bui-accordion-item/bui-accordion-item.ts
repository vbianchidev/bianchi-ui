import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'bui-accordion-item',
  templateUrl: './bui-accordion-item.html',
  styleUrl: './bui-accordion-item.scss',
})
export class BuiAccordionItem {
  public readonly title = input('');

  public readonly isOpen = signal(false);

  public toggle(): void {
    this.isOpen.update((open) => !open);
  }
}
