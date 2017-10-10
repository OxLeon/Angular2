import {Component, OnInit} from '@angular/core'; //OnInit los datos cuando se ejecute la clase
import {Course} from '../common/course';
import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service'
import 'rxjs/add/operator/toPromise';

@Component({
    // tslint:disable-next-line:component-selector
    selector : 'courses',
    template :
    `   <h2> {{title}}</h2>
        <div class="courses_list"> 
            <coursebox
                [course]="course_info"
                *ngFor = 'let course_info of courses'
            >
            </coursebox>
        </div>
        <cart></cart>
    `,
    providers : [ApiService,AuthService]
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

export class CoursesComponent implements OnInit{
    // tslint:disable-next-line:no-inferrable-types
    title: string = 'Cursos disponibles';
    //  Definimos un dato del tipo Course
    courses: Course []; //  Obtendre la información al cargar el modulo

    constructor(
        //Iniciamos pun atributo par autilizar el api que generamos
        private ApiService: ApiService,
        private auth: AuthService
    ){ 

    }


    getCourses(){
        this.ApiService.getCourses().then(
            courses => this.courses = courses // Mi param courses = this.courses de mi component
        )
    }

    // funcion que se ejecuta al iniciar el component
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getCourses();
        this.auth.check();
    }
}
