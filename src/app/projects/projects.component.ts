import { Component, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Proyectos } from '../Model/proyectos';
import { ProyectosService } from '../Service/proyectos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  Proyectoss:Proyectos[]=[];
  constructor(private proyectosServices:ProyectosService){}
  ngOnInit(): void {
    this.proyectosServices.getProyectos().subscribe((result:Proyectos[]) => (this.Proyectoss = result));
    console.log(this.Proyectoss);
  }
}
