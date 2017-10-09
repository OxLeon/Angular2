import {Component, OnInit} from '@angular/core'; // cargue elementos al inciar 
import {ActivatedRoute, Params} from '@angular/router'; // Manejar rutas y paramatros
import {Location} from '@angular/common'; // 
import {Course} from '../common/course';
import {ApiService} from '../services/api.service';

// declarador de component 
@Component({
    selector : 'detail',
    template : ` <div class="detail-course" *ngIf="course"> <!-- Solo mostrar si existe course -->
                    <img [src]="course.image">
                    <h2> {{course.name }}</h2> 
                    <span class="number">
                        Costo: {{course.price | currency: 'USD': true : '1.2'}}                        
                    </span>    
                    <p> {{course.description}} impartido por {{course.instructor}} </p>
                 </div>
               `,
    providers: [ApiService]
})

export class CourseDetail implements OnInit{
    course: Course; //save all data from api
    constructor(
        private route: ActivatedRoute,
        private location: Location, 
        private ApiService: ApiService
    ){

    }

    ngOnInit(){
        console.log(this.route);
        
        this.route.params.forEach( (params: Params)=>{
            let id = +params['id'];
            this.ApiService.getCourse(id)
            .then(course => this.course = course )
        })
    }

}