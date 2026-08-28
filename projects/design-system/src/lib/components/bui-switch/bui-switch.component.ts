import { Component, input, output } from '@angular/core';

@Component({
  selector: 'bui-switch',
  styleUrl: './bui-switch.component.scss',
  template: `
    <button
      type="button"
      class="switch"
      [class.checked]="checked()"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="label()"
      role="switch"
      (click)="toggle()"
    >
      <span class="thumb"></span>
    </button>
  `,
})
export class BuiSwitch {
  public readonly checked = input(false);
  public readonly label = input('Alternar');

  public readonly onSwitchChanges = output<boolean>();

  protected toggle(): void {
    this.onSwitchChanges.emit(!this.checked());
  }
}
