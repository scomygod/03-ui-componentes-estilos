import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { Drawer } from './features/daisyui-page/components/drawer/drawer/drawer';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { SimpsonDetailPageComponent } from './features/simpson/pages/simpsons-page/simpson-detail-page/simpson-detail-page';
import { SimpsonsPageComponent } from './features/simpson/pages/simpsons-page/simpsons-page';

export const routes: Routes = [
  {
    path: 'estilos-page',
    component: EstilosPage,
  },
  // {
  //   path: '',
  //   redirectTo: 'daysiui-page',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: DaisyuiPage,
  },
  {
    path: 'simpsons-page',
    component: SimpsonsPageComponent,
  },
  {
    path: 'simpsons/:id',
    component: SimpsonDetailPageComponent,
  },
];
