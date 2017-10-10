import { Component, OnInit } from '@angular/core';
// Para utilizar nuestro servcio cart, se necesita pasar el servicio como provider
import {CartService} from '../services/cart.service';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-root',
  template: `
        <header>  Ejemplo curso 
          <div class="user_bar">
            <a *ngIf="!auth.session" routerLink="login"> Iniciar session </a>
            <a *ngIf="auth.session" (click)="logout()"> Cerrar session </a> 
          </div>
        </header>
        <nav>
          <a routerLink=""> Inicio </a>
          <a routerLink="courses"> Cursos </a>
        </nav>
          <section>
            <router-outlet> </router-outlet> <!--Renderear dependiendo el path -->
          </section>`,
  providers : [CartService,AuthService] // Agregar los servicios que utilizaremos
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private auth: AuthService
  ){

  };

  ngOnInit() {
    
  };

  logout(){
    this.auth.logout();
  };
}
