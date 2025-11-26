import { Component } from '@angular/core';
import { Drawer } from "./components/drawer/drawer/drawer";
import { Footer } from "./components/footer/footer";
import { Codigo } from "./components/codigo/codigo";
import { Table } from "./components/table/table";
import { Responsividad } from "./components/responsividad/responsividad";
import { Phone } from "./components/phone/phone";
import { Countdown } from "./components/countdown/countdown";
import { Card } from "./components/card/card";

@Component({
  selector: 'app-daisyui-page',
  imports: [Codigo, Table, Responsividad, Phone, Countdown, Card],
  templateUrl: './daisyui-page.html',
})
export class DaisyuiPage {

}
