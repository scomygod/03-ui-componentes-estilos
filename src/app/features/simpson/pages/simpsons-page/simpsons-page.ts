import { Component, effect, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { SimpsonsService } from '../../services/simpson-service';
import { PaginationService } from '../../services/PaginationService';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from "../../../components/pagination/pagination";
import { HeroSimpsons } from "../../components/hero-simpsons/hero-simpsons";
import { BackToTop } from '../../../shared/components/back-to-top/back-to-top';
import { Breadcrumbs } from '../../../shared/components/breadcrumbs/breadcrumbs';


import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterModule, PaginationComponent, HeroSimpsons, Breadcrumbs, BackToTop],
  templateUrl: './simpsons-page.html',
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  charactersPerPage = signal(20);
// Signal que mantiene el número total de páginas
  totalPages = signal(0);

  constructor() {
    // Effect que actualiza el número de páginas cuando hay datos válidos
    effect(() => {
      if (this.simpsonsResource.hasValue()) {
        this.totalPages.set(this.simpsonsResource.value().pages);
      }
    });
  }


  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.charactersPerPage(),
    }),
    stream: ({ params }) => {
      return this.simpsonsService.getCharacters(
        params.page + 1
      );
    },
  });
}
