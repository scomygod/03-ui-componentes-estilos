import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from "@angular/router";
import { ThemeSwitcher } from "../../../../shared/components/theme-switcher/theme-switcher";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, ThemeSwitcher],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { }
