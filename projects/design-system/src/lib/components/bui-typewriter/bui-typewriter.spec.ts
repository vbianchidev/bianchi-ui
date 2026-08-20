import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuiTypewriter } from './bui-typewriter';

describe('BuiTypewriter', () => {
  let fixture: ComponentFixture<BuiTypewriter>;
  let component: BuiTypewriter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiTypewriter],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiTypewriter);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    fixture.componentRef.setInput('text', 'Hello world');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('deve refletir o valor de "text" no template', () => {
    fixture.componentRef.setInput('text', 'Olá mundo');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Olá mundo');
  });

  it('deve ler o valor do signal "text" diretamente', () => {
    fixture.componentRef.setInput('text', 'Teste');
    fixture.detectChanges();
    expect(component.text()).toBe('Teste');
  });

  it('deve usar valor padrão vazio para "style" quando não informado', () => {
    fixture.componentRef.setInput('text', 'Teste');
    fixture.detectChanges();
    expect(component.style()).toBe('');
  });

  it('deve aplicar o valor de "style" quando informado', () => {
    fixture.componentRef.setInput('text', 'Teste');
    fixture.componentRef.setInput('style', 'color: red;');
    fixture.detectChanges();
    expect(component.style()).toBe('color: red;');
  });

  it('deve atualizar o template quando o signal de input mudar', () => {
    fixture.componentRef.setInput('text', 'Primeiro');
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Primeiro');
    fixture.componentRef.setInput('text', 'Segundo');
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Segundo');
  });
});
