import { BrowserModule } from '@angular/platform-browser'; // codigo sea ejecutado en cualquier navegador
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; // Ruta de mi componente
import { CoursesComponent } from './courses.component';
import { CourseBoxComponent } from './components/coursebox.component';
import {CartComponent} from './components/cart.component';

@NgModule({
  declarations: [ // Componentes que estoy utilizando, si no estan definidos aqui no los puedo utilizar 
    AppComponent,
    CoursesComponent,
    CourseBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Importar lbrerias para que funione el projecto en angular
