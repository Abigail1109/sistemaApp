import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RolModel } from '../modelos/rol.model';
import { UsuarioModel } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

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

  getUsuarios():Observable<any>{
    return this.http.get(`${this.url}/usuarios/`, this.requestOptions);
  }

  getUsuario(usuarioId:string):Observable<any>{
    return this.http.get(`${this.url}/usuarios/${usuarioId}`, this.requestOptions);
  }

  crearUsuario(usuario:UsuarioModel):Observable<any>{
    return this.http.post(`${this.url}/usuarios/`, usuario);
  }

  actualizarUsuario(usuarioId:string,usuario:UsuarioModel):Observable<any>{
    return this.http.put(`${this.url}/usuarios/${usuarioId}`, usuario, this.requestOptions);
  }

  eliminarUsuario(usuarioId:string):Observable<any>{
    return this.http.delete(`${this.url}/usuarios/${usuarioId}`, this.requestOptions);
  }

  login(usuario:UsuarioModel):Observable<any>{
    return this.http.post(`${this.url}/login/`, usuario);
  }

  getRoles():Observable<any>{
    return this.http.get(`${this.url}/roles/`);
  }

  getRol(rolId:string):Observable<any>{
    return this.http.get(`${this.url}/roles/${rolId}`, this.requestOptions);
  }

  crearRol(rol:RolModel):Observable<any>{
    return this.http.post(`${this.url}/roles/`, rol);
  }

}
