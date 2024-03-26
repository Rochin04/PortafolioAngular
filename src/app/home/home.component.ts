import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { YoutubeService } from '../Service/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data:any[]=[];
  constructor(private services:YoutubeService){}
  ngOnInit(): void {
    this.llenarData();  
  }
  llenarData(){
    this.services.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }
}