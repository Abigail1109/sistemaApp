import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MesaModel } from '../modelos/mesa.model';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authorization" : `${this.token}`,
    "Content-Type"  : 'application/json; charset=utf-8'
  });
  requestOptions = { headers : this.headers }

  constructor(
    private http:HttpClient
  ) { }

  getMesa(mesaId:string):Observable<any>{
    return this.http.get(`${this.url}/mesas/${mesaId}`, this.requestOptions);
  }

  getMesas():Observable<any>{
    return this.http.get(`${this.url}/mesas/`, this.requestOptions);
  }

  crearMesa(mesa:MesaModel):Observable<any>{
    return this.http.post(`${this.url}/mesas/`, mesa, this.requestOptions);
  }

  actualizarMesa(mesaId:string,mesa:MesaModel):Observable<any>{
    return this.http.put(`${this.url}/mesas/${mesaId}`, mesa, this.requestOptions);
  }

  eliminarMesa(mesaId:string):Observable<any>{
    return this.http.delete(`${this.url}/mesas/${mesaId}`, this.requestOptions);
  }

}
