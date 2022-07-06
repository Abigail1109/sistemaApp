import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SeccionModel } from '../modelos/seccion.model';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

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

  getSecciones():Observable<any>{
    return this.http.get(`${this.url}/secciones/`, this.requestOptions);
  }

  getSeccion(seccionId:string):Observable<any>{
    return this.http.get(`${this.url}/secciones/${seccionId}`, this.requestOptions);
  }

  cearSeccion(seccion:SeccionModel):Observable<any>{
    return this.http.post(`${this.url}/secciones/`, seccion, this.requestOptions);
  }

  actualizarSeccion(seccionId:string, seccion:SeccionModel):Observable<any>{
    return this.http.put(`${this.url}/secciones/${seccionId}`, seccion, this.requestOptions)
  }
}
