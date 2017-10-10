import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export interface User{
    email : string,
    password: string
}

const USERS = [
    {
        email: 'eleon@hotmail.com',
        password : '12345'
    }
]
@Injectable()

export class AuthService{
    users : User [] = USERS;
    session : boolean = false;

    constructor(
        private router: Router
    ){

    }
    
    logout(){
        this.session = false;
         localStorage.removeItem("user");
         this.redirect();
    };

    redirect(){
        let link = ['/login'];
        this.router.navigate(link);
    };

    login(user:User){
        let user_exist = this.users.find(u => u.email == user.email); 

        if(user_exist && user_exist.password == user.password){
            localStorage.setItem("user",JSON.stringify(user_exist));
            this.session = true;
            let link = ['/'];
            this.router.navigate(link); ///redirect home
        }
    };

    check(){
        if(localStorage.getItem("user")== null){
            this.session = false;
            this.redirect();
        }
        else{
            this.session = true;            
        }
    };

    getSession(){
        return this.session;
    };

    user(){
        return localStorage.getItem("user");
    };
}
