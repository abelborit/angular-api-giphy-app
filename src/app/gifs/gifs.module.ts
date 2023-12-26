import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardItemComponent],
  exports: [HomePageComponent],
  imports: [CommonModule],
})
export class GifsModule {}
