import { Injectable } from '@angular/core';
import { Rochin } from '../Model/rochin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
// import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RochinService {
  url = "Rochin"
  constructor(private http:HttpClient) { }
  public getRochin():Observable<Rochin[]>{
    return this.http.get<Rochin[]>(`${environment.apiUrl}/${this.url}`);
  }
}
