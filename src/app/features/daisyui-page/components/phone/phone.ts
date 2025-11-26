import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [],
  templateUrl: './phone.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Phone { }
