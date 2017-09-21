import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';

// on init definir datos al desplegar la directiva

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cart',
    template: `
        <div class="cart">
            <h2>Carrito</h2>
            <span>{{details.items}} artículos agregados</span>
            <div *ngFor="let key of keys()" class="detail">
                {{courses[key].name}}
                {{courses[key].price | currency:'USD' : true :'1.2-2'}}
                {{courses[key].quantity }}
                <span class="total">
                    {{ (courses[key].quantity * courses[key].price) }}
                </span>
            </div>
            <span class="total">{{details.total | currency:'USD' : true :'1.2-2' }}</span>
        </div>
    ` // el ngFor no lo podemos usar para interar un objeto
})

export class CartComponent implements OnInit {
    // Nos pide un atributo esencial
    // attributes off y class
    courses: any;
    details: any;
    // Necesitamos incializarlos y lo haremos de ngOnInit

    // parameter cartService equivalente al servicio que estoy creando
    constructor(private CartService: CartService ) {

    }
    // obtener los key del obj que creamos
    keys() {
        return Object.keys(this.courses);
    }
    ngOnInit() {
        this.courses = this.CartService.getCourses();
        this.details = this.CartService.getDetail();
    }
}
