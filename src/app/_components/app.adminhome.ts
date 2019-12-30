import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'adminhome',
    templateUrl: '../_html/app.adminhome.html'
})
export class AdminHomeComponent implements OnInit{
    ngOnInit(){
      
    }

    constructor(private router:Router){

    }

}