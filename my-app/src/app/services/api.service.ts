import {Injectable} from '@angular/core'; // generar un servicio
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Course} from '../common/course';

@Injectable()

export class ApiService{
    constructor(private http: Http){
        
    }

    getCourses(){
        let url = '/data/info.json'
        return this.http.get(url)
        .toPromise()
        .then( response => response.json())
        .catch(this.error);
    }

    // Funcion que retonara Course en un array
    getCoursesSlow() : Promise <Course[]>{
        return new Promise <Course[]>(
            resolve => setTimeout(resolve, 2000))
            .then( ()=> this.getCourses())
    }

    //Get detail by id 
    getCourse(id:number){
        return this.getCourses()
        .then( courses => courses.find( course => course.id == id )) //Recibo course y despues busco

    }

    error(error:any){
        return Promise.reject(error.message || error);
    }
}