import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class dataService {
@Output() detalle : EventEmitter<any> = new EventEmitter()
  constructor(private http: HttpClient) { }
  Episodes(){
    return this.http.get(environment.uribaselocal + '/episode')
  }
  Characters(){
    return this.http.get(environment.uribaselocal + '/character')
  }
  CharacterId(id : any){
    return this.http.get(environment.uribaselocal + '/character/' + id)
  }
 
}
