import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoModel } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

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

  getProductos():Observable<any>{
    return this.http.get(`${this.url}/productos/`, this.requestOptions);
  }

  getProducto(productoId:string):Observable<any>{
    return this.http.get(`${this.url}/productos/${productoId}`, this.requestOptions);
  }

  getProductoByCB(codigoBarras:string):Observable<any>{
    return this.http.get(`${this.url}/productos/codigoBarras/${codigoBarras}`, this.requestOptions);
  }

  crearProducto(producto:ProductoModel):Observable<any>{
    return this.http.post(`${this.url}/productos/`, producto, this.requestOptions);
  }

  actualizarProducto(productoId:string, producto:ProductoModel):Observable<any>{
    return this.http.put(`${this.url}/productos/${productoId}`, producto, this.requestOptions);
  }
}
