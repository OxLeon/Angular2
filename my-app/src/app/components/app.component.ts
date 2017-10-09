import { Component } from '@angular/core';
// Para utilizar nuestro servcio cart, se necesita pasar el servicio como provider
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-root',
  template: `
        <header>  Ejemplo curso </header>
        <nav>
          <a routerLink=""> Inicio </a>
          <a routerLink="courses"> Cursos </a>
        </nav>
          <section>
            <router-outlet> </router-outlet> <!--Renderear dependiendo el path -->
          </section>`,
  providers : [CartService] // Agregar los servicios que utilizaremos
})
export class AppComponent {
  title = 'app';
}
