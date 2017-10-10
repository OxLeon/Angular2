import {Component} from '@angular/core';
import {AuthService, User} from '../services/auth.service';

@Component({
    selector: 'login-form',
    template: ` <p> La tienda es privada </p>
        <form (ngSubmit)="login()" #loginForm="ngForm"> <!-- Ejecutar la fucion login #loginForm indicar a donde pertenece --> 
            <div *ngIf="error" class="error">
            {{error}} 
            </div>
            <label> Tu email: </label>
            <input type="text" required autocomplete="off" [(ngModel)]="user.email" 
                placeholder="Email" name="email">
            <label> Tu password </label>
            <input type="password" required [(ngModel)]="user.password" 
                name="password" placeholder="Password">
            <button  type="submit"> Ingresar </button>        
        </form>
    `,
    providers: [AuthService]
})

export class LoginComponent{
    user: User;
    error: string;

    constructor(
        private auth: AuthService
    ){
        // incializo mi user que utilizo en form
        this.user = {
            email: null,
            password: null
        }
    }
    // mi logica esta en el servicio
    login(){
        if(!this.auth.login(this.user)){ // funcion in auth.service
            this.error = 'Contraseña incorrecta'
        }
    }
}