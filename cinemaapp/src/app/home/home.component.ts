import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public sApi: ApiService, 
              public httpClient: HttpClient,
              public router: Router) { }
    
  ngOnInit(): void {
      
  }
  
  
  gotoAreaUser(){
      if (this.sApi.isLoggedIn()){
      this.router.navigate(['/profilo']);} 
      else { this.router.navigate(['/user']);}
  }
  
   gotoAreaFilm(){
      this.router.navigate(['/areafilm']);
  }
  
   gotoRicerca(){
      this.router.navigate(['/search']);
  }
  
  }
  