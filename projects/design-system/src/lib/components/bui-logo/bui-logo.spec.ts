import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiLogo } from './bui-logo';

@Component({
  standalone: true,
  imports: [BuiLogo],
  template: `<bui-logo [width]="width" />`,
})
class TestHostComponent {
  width = 68;
}

describe('BuiLogo', () => {
  let fixture: ComponentFixture<BuiLogo>;
  let component: BuiLogo;
  let svg: SVGElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiLogo);
    component = fixture.componentInstance;

    fixture.detectChanges();

    svg = fixture.nativeElement.querySelector('svg');
  });

  describe('rendering', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render an SVG element', () => {
      expect(svg).toBeTruthy();
    });

    it('should have the correct viewBox', () => {
      expect(svg.getAttribute('viewBox')).toBe('0 0 68 60');
    });

    it('should have the correct accessibility attributes', () => {
      expect(svg.getAttribute('role')).toBe('img');
      expect(svg.getAttribute('aria-label')).toBe('Logo');
    });
  });

  describe('dimensions', () => {
    it('should use 68px as the default width', () => {
      expect(component.width()).toBe(68);
    });

    it('should calculate the default height proportionally', () => {
      expect(component.height()).toBeCloseTo(60);
    });

    it('should set the SVG width attribute', () => {
      expect(svg.getAttribute('width')).toBe('68');
    });

    it('should set the SVG height attribute', () => {
      expect(svg.getAttribute('height')).toBe('60');
    });
  });

  describe('width input', () => {
    it('should calculate the height based on the width', () => {
      fixture.componentRef.setInput('width', 34);
      fixture.detectChanges();

      expect(component.width()).toBe(34);
      expect(component.height()).toBeCloseTo(30);
    });

    it('should update the SVG dimensions when width changes', () => {
      fixture.componentRef.setInput('width', 34);
      fixture.detectChanges();

      expect(svg.getAttribute('width')).toBe('34');
      expect(svg.getAttribute('height')).toBe('30');
    });

    it('should preserve the aspect ratio', () => {
      const width = 100;

      fixture.componentRef.setInput('width', width);
      fixture.detectChanges();

      const height = Number(svg.getAttribute('height'));

      expect(height / width).toBeCloseTo(60 / 68);
    });
  });

  describe('logo path', () => {
    it('should render the logo path', () => {
      const path = fixture.nativeElement.querySelector('path');

      expect(path).toBeTruthy();
    });

    it('should use the accent color CSS variable', () => {
      const path = fixture.nativeElement.querySelector('path');

      expect(path.getAttribute('fill')).toBe('var(--bui-color-text-accent)');
    });
  });
});
