import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

/* se exporta LazyImageComponent ya que podemos hacer uso de él en otras partes de la aplicación */
@NgModule({
  declarations: [SidebarComponent, LazyImageComponent],
  exports: [SidebarComponent, LazyImageComponent],
  imports: [CommonModule],
})
export class SharedModule {}
