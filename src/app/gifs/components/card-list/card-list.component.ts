import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  /* recibirá información desde el componente padre. Si no se le pasa nada entonces gifsList será un arreglo vacío = [] */
  @Input()
  public gifsList: Gif[] = [];
}
