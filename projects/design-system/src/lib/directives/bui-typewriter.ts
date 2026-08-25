import { AfterViewInit, Directive, ElementRef, NgZone, OnDestroy } from '@angular/core';

@Directive({
  selector: '[buiTypewriter]',
  standalone: true,
})
export class BuiTypewriterDirective implements AfterViewInit, OnDestroy {
  private observer?: MutationObserver;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly zone: NgZone,
  ) {}

  public ngAfterViewInit(): void {
    this.updateAnimation();

    this.observer = new MutationObserver(() => {
      this.zone.runOutsideAngular(() => {
        this.updateAnimation();
      });
    });

    this.observer.observe(this.elementRef.nativeElement, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private updateAnimation(): void {
    const element = this.elementRef.nativeElement;
    const text = element.textContent?.trim() ?? '';

    if (!text) {
      return;
    }

    const length = text.length;
    const duration = Math.max(0.5, length * 0.1);
    element.style.setProperty('--bui-typewriter-duration', `${duration}s`);
    element.style.setProperty('--bui-typewriter-steps', `${length}`);
    element.classList.remove('bui-typewriter-animation');

    // Reinicia a animação
    void element.offsetWidth;
    element.classList.add('bui-typewriter-animation');
  }
}
