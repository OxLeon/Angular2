import {BrowserModule} from '@angular/platform-browser'; // codigo sea ejecutado en cualquier navegador
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http'; 
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'; // Use forms in app
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './components/app.component'; // Ruta de mi componente
import {CoursesComponent} from './components/courses.component';
import {CourseBoxComponent} from './components/coursebox.component';
import {CartComponent} from './components/cart.component';
import {WelcomeComponent} from './components/welcome.component';
import {CourseDetail} from './components/details.component';
import {LoginComponent} from './components/login.component';

const routes = [
  {
     path: '', // la ruta principal respondera lo de welcome component
     component: WelcomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path  :'course/:id', //id dinamico
    component: CourseDetail
  },
  {
    path: 'login',
    component: LoginComponent
  }
]; 

@NgModule({
  declarations: [ // Componentes que estoy utilizando, si no estan definidos aqui no los puedo utilizar 
    AppComponent,
    CoursesComponent,
    CourseBoxComponent,
    CartComponent,
    WelcomeComponent,
    CourseDetail,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Importar lbrerias para que funione el projecto en angular
