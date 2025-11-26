import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  THEME_KEY = 'app-theme';
  themes = ['light', 'dark', 'caramellatte'];

  saveTheme(theme: string) {
    const themeJson = JSON.stringify(theme);
    localStorage.setItem(this.THEME_KEY, themeJson);
  }

  getTheme() {
    const themeJson = localStorage.getItem(this.THEME_KEY);
    if (!themeJson) return 'dark';
    return JSON.parse(themeJson);
  }

  // Cambia el tema y actualiza el atributo global
  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.saveTheme(theme);
  }
}
