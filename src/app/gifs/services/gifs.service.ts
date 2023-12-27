import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

/* con el { providedIn: 'root' } este sevicio se puede utilizar en cualquier parte de la aplicación de Angular */
@Injectable({ providedIn: 'root' })
export class GifsService {
  /* para trabajar con HTTP con lo propio de Angular aquí se utilizará el servicio propio de HttpClient. HttpClient es la clase con la que realizamos las request la cual es basicamente un servicio. */
  constructor(private HttpClient: HttpClient) {}

  /* se coloca con guión bajo _ por convención al trabajar con clases para indicar que será una propiedad privada y que no se accederá a ella de forma directa para evitar manipularla o hacerle cambios de forma directa, pero no afecta en nada colocar o no, es solo para tener una referencia que es una propiedad privada */
  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  public gifsList: Gif[] = [];

  get getTagsHistory_Service() {
    /* como los objetos y arreglos se pasan por referencia entonces se creará una copia para romper esa referencia y generar un nuevo arreglo */
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(searchValue: string) {
    searchValue = searchValue.toLocaleLowerCase();

    /* si incluye lo que se está buscando entonces va a filtrar el arreglo y lo eliminará del arreglo anterior para colocarlo nuevamente al principio del arreglo */
    if (this._tagsHistory.includes(searchValue)) {
      this._tagsHistory = this._tagsHistory.filter(
        (element) => element !== searchValue
      );
    }

    this._tagsHistory.unshift(searchValue);
    /* solo 15 elementos en el array */
    this._tagsHistory = this._tagsHistory.splice(0, 15);
  }

  handleSearchValue_Service(searchValue: string): void {
    // console.log({ searchValue });
    if (searchValue.trim().length === 0) return;
    this.organizeTagsHistory(searchValue);

    /* para hacer las peticiones HTTP se podría trabajar como normalmente se haría usando fetch nativo de javascript o con axios pero con Angular al hacer peticiones HTTP vamos a querer usar los interceptores, suscriptores, etc... */
    /* en la mayoría de los casos en los que puede usar promesas, los observables pueden hacerlo mejor. Una ventaja clave de los observables es que se pueden cancelar (dando de baja la suscripción). Esa es una característica que también es útil cuando solo se devuelve un único valor. Además, todas las funciones de operador de observables que manejan múltiples solicitudes asíncronas paralelas son mucho más fáciles de usar que elaborar manualmente algunas promesas de manejo juntas. */
    // fetch(
    //   `https://api.giphy.com/v1/gifs/search?api_key=${environment.GIPHY_API_KEY}&q=${searchValue}&limit=10`
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    const paramsAPI = new HttpParams()
      .set('api_key', environment.GIPHY_API_KEY)
      .set('q', searchValue)
      .set('limit', '10');
    /* aquí no se trabajará como promesa sino se trabajará como un observable y este es un objeto en el cual a lo largo del tiempo puede estar emitiendo diferentes valores. Usualmente cuando hablamos de “suscribimos a los observables”, significa estar escuchando las emisiones que ese objeto estará emitiendo a lo largo de su vida. En este caso este observable emitirá un valor cuando tengamos la respuesta pero hay observables que son continuos, es decir, siempre están emitiendo valores y nosotros trabajamos en base a esas emisiones. Para escuchar la respuesta nos tenemos que suscribir a este observable. El (observer) => {...} sería como colocar (response) => {...}. También se trabajará con el HttpParams que viene de Angular */
    this.HttpClient.get<SearchResponse>(`${this.serviceUrl}/search`, {
      params: paramsAPI,
    }).subscribe((observer) => {
      // console.log(observer);
      this.gifsList = observer.data;
    });
  }
}
