import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  /* con el @ViewChild (toma referencia a un elemento y regresa un elemento HTML) @ViewChildren (toma referencia a varios elementos y retorna un arreglo de los elementos HTML) */
  /* otra forma de hacerlo sería hacer uso del @ViewChild(selector) que enlaza el resultado final de la vista del componente basado en el predicado a la propiedad de la clase (no es válido para directivas), es decir, que el @ViewChild(selector) tendrá un selector el cual será el nombre del elemento HTML que quiero enlazar donde en este caso se usará la referencia local de #inputSearchValue pero sin el numeral # aunque también se puede hacer directo con el input y evitar la referencia local pero se podría tener más de un input */

  /* el inputValueRef será la referencia al input del search-box.component.html. ElementRef<> es una referencia a un elemento HTML. Se coloca en non-null-operator ya que puede ser nulo porque por ejemplo se está colocando la referencia pero el elemento HTML (en este caso el input) puede no estar construido pero en este caso le vamos a decir a TypeScript que inputValueRef siempre tendrá una referencia */
  @ViewChild('inputSearchValue')
  public inputValueRef!: ElementRef<HTMLInputElement>;

  /* al hacer lo anterior entonces ni si quiera se necesita recibir el searchValue: string como parámetro porque ese elemento de tipo string ya se tiene en el inputValueRef. Entonces en el inputValueRef ya se tiene todas las propiedades y métodos que tiene un input */
  handleSearchValue(): void {
    const newSearchValue = this.inputValueRef.nativeElement.value;
    console.log({ newSearchValue });
  }

  /* sin el @ViewChild */
  // handleSearchValue(searchValue: string): void {
  //   console.log({ searchValue });
  // }
}
