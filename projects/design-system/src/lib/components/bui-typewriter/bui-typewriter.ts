import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'bui-typewriter',
  templateUrl: './bui-typewriter.html',
  styleUrl: './bui-typewriter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTypewriter {
  public readonly text: InputSignal<string> = input.required<string>();
  public readonly style: InputSignal<string> = input<string>('');
}
