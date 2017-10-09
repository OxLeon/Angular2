import {Component, Input} from '@angular/core';
// Para comunicar entre components se utiliza input
import {Course} from '../common/course'; // interface generado
import {CartService} from '../services/cart.service';
import {Router} from '@angular/router';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'coursebox',  // html tag
    template: ` <div class="course">
                    <img [src]="course.image" (click)="goDetails(course)">
                    <h2> {{course.name }}</h2>
                    <h2> {{course.price | currency : 'USD': true :'1.2-2' }} </h2>
                    <h2> {{course.id }}</h2>
                    <button (click)="add(course)"> Agregar </button>
                </div>`
})

export class CourseBoxComponent {
    // Antes de lavariable para definirlo como atributo del componente.
    @Input()
    course: Course;
    // obterner el estado de mi servicio
    constructor(
        private CartService: CartService,
        private router : Router // variable para aceder a Router
    ) {
    }
    // Metodo para llamar en el boton
    // El parametro es del tipo Course declarado en course.ts
    add(course: Course) {
        this.CartService.AddToCar(course);
    }

    goDetails(course:Course){ // recibo una obj del tipo Course
        let link = ['/course',course.id];
        console.log(link);
        
        this.router.navigate(link); 
    }
}



