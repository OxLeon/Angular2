import {Component} from '@angular/core';
import {Course} from './common/course';


const COURSES: Course[] = [
    {
        id : 1,
        name : 'Angular',
        image : './assets/angular.png',
        price : 50
    },
    {
        id : 2,
        name : 'Pynton',
        image : './assets/python.png',
        price : 10
    },
    {
        id : 3,
        name : 'Ruby',
        image : 'ruta...',
        price : 10
    }
];

@Component({
    // tslint:disable-next-line:component-selector
    selector : 'courses',
    template :
    `   <h2> {{title}}</h2>
        <coursebox
            [course]="course_info"
            *ngFor = 'let course_info of courses'
        >
        </coursebox>
    `
    // Para tener un atributo html en Angular es necesario ponerlo en []
    // Falta <img [src]="courses.image"> </img>
    // *ngFor="let course of courses " Realizar un ng repeat
    /*
        <h2> {{title}}</h2>
        <div class="courses_list">
            <img [src]="courses.image"> </img>
            <h2> {{course.name }}</h2>
            <h2> {{course.price | currency : 'USD': true :'1.2-2' }} </h2>
            <h2> {{course.id }}</h2>
            <button> Agregar </button>
        </div>
    */
})

export class CoursesComponent {
    // tslint:disable-next-line:no-inferrable-types
    title: string = 'Cursos disponibles';
    //  Definimos un dato del tipo Course
    courses: Course [] = COURSES; // courses es igual a un array de Course que es mi interface
}
