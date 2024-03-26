import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private urlApi = 'https://rickandmortyapi.com/api/character/1,183';
  constructor(public http: HttpClient) {
  }
  public getData():Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
}
