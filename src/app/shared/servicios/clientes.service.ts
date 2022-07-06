import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../modelos/cliente.model';
import { DireccionModel } from '../modelos/direccion.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

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

  getClientes():Observable<any>{
    return this.http.get(`${this.url}/clientes/`, this.requestOptions);
  }

  getCliente(clienteId:string):Observable<any>{
    return this.http.get(`${this.url}/clientes/${clienteId}`, this.requestOptions);
  }

  getClienteByNombre(nombre:string):Observable<any>{
    return this.http.get(`${this.url}/clientes/nombre/${nombre}`, this.requestOptions);
  }

  crearCliente(cliente:ClienteModel):Observable<any>{
    return this.http.post(`${this.url}/clientes/`, cliente, this.requestOptions);
  }

  actualizarCliente(clienteId:string, cliente:ClienteModel):Observable<any>{
    return this.http.put(`${this.url}/clientes/${clienteId}`, cliente, this.requestOptions);
  }

  getDireccion(direccionId:string):Observable<any>{
    return this.http.get(`${this.url}/direcciones/${direccionId}`, this.requestOptions);
  }

  getDireccionByCliente(clienteId:string):Observable<any>{
    return this.http.get(`${this.url}/direcciones/cliente/${clienteId}`);
  }

  crearDireccion(direccion:DireccionModel):Observable<any>{
    return this.http.post(`${this.url}/direcciones/`, direccion, this.requestOptions);
  }

  actualizarDireccion(direccionId:string, direccion:DireccionModel):Observable<any>{
    return this.http.put(`${this.url}/direcciones/${direccionId}`, direccion, this.requestOptions);
  }

}
