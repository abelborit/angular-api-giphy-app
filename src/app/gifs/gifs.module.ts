import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  imports: [CommonModule],
})
export class GifsModule {}
