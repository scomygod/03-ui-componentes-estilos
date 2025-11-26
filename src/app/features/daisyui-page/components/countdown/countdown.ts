import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Countdown {
  days = signal(15);
  hours = signal(10);
  min = signal(24);
  sec = signal(59);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.tick();
      this.cdr.markForCheck(); // 👈 CAMBIO IMPORTANTE
    }, 1000);
  }

  tick() {
    this.sec.update(v => v - 1);

    if (this.sec() < 0) {
      this.sec.set(59);
      this.min.update(v => v - 1);
    }
    if (this.min() < 0) {
      this.min.set(59);
      this.hours.update(v => v - 1);
    }
    if (this.hours() < 0) {
      this.hours.set(23);
      this.days.update(v => v - 1);
    }
  }
}
