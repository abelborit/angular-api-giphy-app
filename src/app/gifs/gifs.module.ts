import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';

/* se importa el SharedModule aquí porque haré uso de lo que exporta que en este caso lo que usaremos en este GifsModule y en sus componentes sería el <app-shared-lazy-image></app-shared-lazy-image> del class LazyImageComponent */
@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifCardComponent,
  ],
  exports: [HomePageComponent],
  imports: [CommonModule, SharedModule],
})
export class GifsModule {}
