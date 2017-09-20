import { Component } from '@angular/core';
// Para utilizar nuestro servcio cart, se necesita pasar el servicio como provider
import {CartService} from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
        <header>  Ejemplo curso </header>
          <section>
            <courses></courses>
            <cart> </cart>
          </section>`,
  providers : [CartService] // Agregar los servicios que utilizaremos
})
export class AppComponent {
  title = 'app';
}
