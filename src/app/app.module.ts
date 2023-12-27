import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

import { AppComponent } from './app.component';

/* se coloca el HttpClientModule (módulo propio de Angular) aquí ya que puede ser que en más partes de la aplicación lo utilicemos. Este HttpClientModule trabaja en base a observables y programación reactiva. HttpClientModule es el modulo que configura la inyección de dependencias para HttpClient el cual se utilizará por ejemplo en el gifs.service.ts. ¿Porque se realiza de esta manera? es parte de los Principio SOLID más especificamente la inyección de dependencia, donde una clase recibe como argumento una instancia de otra clase ya creada en lugar de instancialar dentro de nuestra clase. */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, GifsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
