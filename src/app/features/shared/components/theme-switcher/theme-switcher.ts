import { ThemeService } from './../../../simpson/services/ThemeService';
import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';


@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  templateUrl: './theme-switcher.html',

})
export class ThemeSwitcher {
  constructor() {
    effect(() => {
      this.setTheme(this.currentTheme());
    });
  }

  themes = ['light', 'dark', 'caramellatte'];
  readonly themeService = inject(ThemeService);

  currentTheme = signal<string>(this.getCurrentTheme());

  private getCurrentTheme(): string {
    const theme = this.themeService.getTheme();
    return theme;
  }

  setTheme(theme: string): void {
    this.currentTheme.set(theme);
    this.themeService.setTheme(theme);
  }
}
