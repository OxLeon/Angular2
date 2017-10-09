import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export interface User{
    email : string,
    password: string
}

const Users = [
    {
        email: 'eleon@hotmail.com',
        password : '12345'
    }
]
@Injectable()

export class AuthService{
    users : User []
}