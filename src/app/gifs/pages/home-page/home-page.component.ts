import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  /* se hará la inyección de dependencias aquí para pasar el listado de gifs a sus hijos que lo necesiten para que el componente card-list.component.html no esté tan estrechamente ligado al funcionaiento que viene del gifs.service.ts y así poder reutilizar el componente */
  constructor(private GifsService: GifsService) {}

  get getGifsList(): Gif[] {
    return this.GifsService.gifsList;
  }
}
