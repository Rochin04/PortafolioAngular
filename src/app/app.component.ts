import { Component, OnInit } from '@angular/core';
import { Rochin } from './Model/rochin';
import { RochinService } from './Service/rochin.service';
import { subscribe } from 'diagnostics_channel';
import { Proyectos } from './Model/proyectos';
import { ProyectosService } from './Service/proyectos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OtroPortafolio';
  // Rochins:Rochin[]=[];
  // Proyectoss:Proyectos[]=[];   private rochinService:RochinService, private proyectosServices:ProyectosService
  constructor(){}
  // ngOnInit(): void {
  //   this.rochinService.getRochin().subscribe((result:Rochin[]) => (this.Rochins = result));
  //   this.proyectosServices.getProyectos().subscribe((result:Proyectos[]) => (this.Proyectoss = result));
  //   console.log(this.Rochins);
  //   console.log(this.Proyectoss);
  // }
}
