import {Injectable} from '@angular/core'; // generar un servicio
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Course} from '../common/course';

@Injectable()

export class ApiService(){
 constructor(private http: Http){

 }

 getCourse(){
     let url = 'data/info.js'
     return this.http.get(url)
        .toPromise
 }
}