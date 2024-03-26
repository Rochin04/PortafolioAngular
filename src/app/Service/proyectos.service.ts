import { Injectable } from '@angular/core';
import { Proyectos } from '../Model/proyectos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url = "Projects"
  constructor(private http:HttpClient) { }
  public getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${environment.apiUrl}/${this.url}`);
  }
}
