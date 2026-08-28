import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  InputSignal,
  NgZone,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'bui-typewriter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './bui-typewriter.scss',
  template: `
    <span class="bui-typewriter-wrapper">
      <span class="bui-typewriter" [class]="textClass()">
        <ng-content></ng-content>
      </span>
    </span>
  `,
})
export class BuiTypewriter implements AfterViewInit, OnDestroy {
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private readonly zone: NgZone = inject(NgZone);
  private observer?: MutationObserver;

  public readonly textClass: InputSignal<string> = input<string>('');

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.updateAnimation();

      this.observer = new MutationObserver(() => {
        this.updateAnimation();
      });

      this.observer.observe(this.contentElement, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    });
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private get contentElement(): HTMLElement {
    return this.elementRef.nativeElement.querySelector('.bui-typewriter')!;
  }

  private updateAnimation(): void {
    const element = this.contentElement;
    const text = element.textContent?.trim() ?? '';

    if (!text) {
      return;
    }

    const length = text.length;
    const duration = Math.max(0.5, length * 0.1);

    element.style.setProperty('--bui-typewriter-duration', `${duration}s`);
    element.style.setProperty('--bui-typewriter-steps', `${length}`);
    element.classList.remove('bui-typewriter-animation');

    // Força o browser a recalcular a animação.
    void element.offsetWidth;

    element.classList.add('bui-typewriter-animation');
  }
}
