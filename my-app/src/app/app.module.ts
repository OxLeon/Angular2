import { BrowserModule } from '@angular/platform-browser'; // codigo sea ejecutado en cualquier navegador
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; // Ruta de mi componente

import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [ // Componentes que estoy utilizando
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Importar lbrerias para que funione el projecto en angular 