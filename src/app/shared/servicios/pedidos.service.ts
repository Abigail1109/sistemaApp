import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetallePedidoModel } from '../modelos/detallePedido.model';
import { PedidoModel } from '../modelos/pedido.model';
import { TipoPedidoModel } from '../modelos/tipoPedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

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

  getPedidos():Observable<any>{
    return this.http.get(`${this.url}/pedidos/`, this.requestOptions);
  }

  getPedido(pedidoId:string):Observable<any>{
    return this.http.get(`${this.url}/pedidos/${pedidoId}`, this.requestOptions);
  }

  crearPedido(pedido:PedidoModel):Observable<any>{
    return this.http.post(`${this.url}/pedidos/`, pedido, this.requestOptions);
  }

  actualizarPedido(pedidoId:string, pedido:PedidoModel):Observable<any>{
    return this.http.put(`${this.url}/pedidos/${pedidoId}`, pedido, this.requestOptions);
  }

  eliminarPedido(pedidoId:string):Observable<any>{
    return this.http.delete(`${this.url}/pedidos/${pedidoId}`, this.requestOptions);
  }

  getDetallePedido(detalleId:string):Observable<any>{
    return this.http.get(`${this.url}/detallesPedidos/${detalleId}`, this.requestOptions);
  }

  getDetallesPedido(pedidoId:string):Observable<any>{
    return this.http.get(`${this.url}/detallesPedidos/pedido/${pedidoId}`, this.requestOptions);
  }

  crearDetallePedido(detallePedido:DetallePedidoModel):Observable<any>{
    return this.http.post(`${this.url}/detallesPedidos/`, detallePedido, this.requestOptions);
  }

  actualizarDetallePedido(detalleId:string, detallePedido:DetallePedidoModel):Observable<any>{
    return this.http.put(`${this.url}/detallesPedidos/${detalleId}`, detallePedido, this.requestOptions);
  }

  getTiposPedido():Observable<any>{
    return this.http.get(`${this.url}/tiposPedido/`, this.requestOptions);
  }

  getTipoPedido(tipoId:string):Observable<any>{
    return this.http.get(`${this.url}/tiposPedido/${tipoId}`, this.requestOptions);
  }

  crearTipoPedido(tipoPedido:TipoPedidoModel):Observable<any>{
    return this.http.post(`${this.url}/tiposPedido/`, tipoPedido, this.requestOptions);
  }
}
