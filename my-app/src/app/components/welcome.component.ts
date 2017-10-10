import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'

@Component({
    selector: 'welcome',
    template: '<h2> Bienvenidos a cursos online </h2> '
})

export class WelcomeComponent implements OnInit{
    constructor(
        private auth : AuthService
    ){

    }

    ngOnInit() {
        this.auth.check();
    }
}