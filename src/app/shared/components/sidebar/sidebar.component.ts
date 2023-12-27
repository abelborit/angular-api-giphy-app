import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) {}

  /* el servicio al ser privado entonces debo hacer uso de un getter para obtener sus métodos o propiedades */
  /* El comportamiento de refrescar automáticamente el array de strings al usar el método GET getTags() en la función getTags se debe a que Angular utiliza el mecanismo de detección de cambios para rastrear las propiedades que se utilizan en las plantillas y actualizarlas cuando sea necesario. Aunque no se cuente con un decorador @Observable explícito, Angular detecta los cambios en las propiedades y métodos que se utilizan en las plantillas y realiza una actualización. En este caso, cada vez que el método GET getTags() se ejecuta, Angular detecta que la propiedad getTagsHistory_Service del servicio GifsService ha cambiado y actualiza automáticamente el contenido del sidebar a través del binding en la plantilla o template. No es que el método GET sea una función de palabra reservada que se ejecute constantemente, sino que Angular está detectando los cambios y actuando en consecuencia para mantener la vista de la aplicación actualizada. */
  get getTags(): string[] {
    return this.GifsService.getTagsHistory_Service;
  }

  handleSearchByTag(tag: string): void {
    this.GifsService.handleSearchValue_Service(tag);
  }

  handleCleanStorage(): void {
    this.GifsService.clearLocalStorage();
  }
}
