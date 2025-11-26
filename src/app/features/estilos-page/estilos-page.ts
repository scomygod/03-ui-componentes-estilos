import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBoxComponent } from './components/signal-box/signal-box';
import { ProgressBar } from "./components/progress-bar/progress-bar";

@Component({
  selector: 'app-estilos-page',
  imports: [SignalBoxComponent, ProgressBar],
  standalone: true,
  templateUrl: './estilos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstilosPage {}
