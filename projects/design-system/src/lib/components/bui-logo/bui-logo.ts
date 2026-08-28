import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'bui-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
    `,
  ],
  template: `
    <svg
      [attr.width]="width()"
      [attr.height]="height()"
      viewBox="0 0 68 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.8001 0.0317518L68 0L55.228 23.9205L40.8001 0.0317518ZM48.8421 35.8809L36.0701 59.8014L0 0.0793795L27.1999 0.0476277L48.8421 35.8809Z"
        [attr.fill]="'var(--bui-color-text-accent)'"
      />
    </svg>
  `,
})
export class BuiLogo {
  private readonly defaultWidth = 68;
  private readonly defaultHeight = 60;
  private readonly aspectRatio = this.defaultHeight / this.defaultWidth;

  height = input<number>(this.defaultWidth);
  width = computed(() => this.height() * this.aspectRatio);
}
