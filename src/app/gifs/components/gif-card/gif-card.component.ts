import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css'],
})

/* FORMA 1 */
// export class GifCardComponent {
//   /* información desde el padre a este hijo */
//   @Input()
//   public gifInfo: Gif = {} as Gif;
// }

/* FORMA 2: hacer una validación para que venga el elemento y si no entonces que de un error */
export class GifCardComponent implements OnInit {
  /* información desde el padre a este hijo */
  @Input()
  public gifInfo: Gif = {} as Gif;

  /* el ngOnInit es un método especial del ciclo de vida de los componentes de Angular que se ejecuta después de que Angular haya inicializado las propiedades vinculadas del componente, es decir, cuando el componente se haya inicializado. Es un buen lugar para realizar tareas de inicialización, como recuperar datos iniciales del servicio o establecer variables. Si una variable o método no se ejecuta en ngOnInit, no necesariamente mostrará un mensaje de error. Puedes usar ngOnInit para configurar tu componente antes de que se presente al usuario y asegurarte de que todo esté listo para su funcionamiento. */
  ngOnInit(): void {
    /* se hará una validación para corroborar que el gifInfo se está enviando y si no entonces lanzará un error */
    if (!this.gifInfo) throw new Error('Gif property is required...');
  }
}
