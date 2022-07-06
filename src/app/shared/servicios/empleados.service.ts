import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmpleadoModel } from '../modelos/empleado.model';

// Modelos
//import { EmpleadoModel} from '../modelos/menuPrincipal.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
   
  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authorization" : `${this.token}`,
    "Content-Type"  : 'application/json; charset=utf-8'
  });
  requestOptions = { headers : this.headers }

  constructor(
    private http: HttpClient
  ) { }

  getEmpleado(empleadoId:string):Observable<any>{
    return this.http.get(`${this.url}/empleados/${empleadoId}`, this.requestOptions);
  }

  getEmpleadoByNombre(nombre:string):Observable<any>{
    return this.http.get(`${this.url}/empleados/nombre/${nombre}`, this.requestOptions);
  }

  crearEmpleado(empleado:EmpleadoModel):Observable<any>{
    return this.http.post(`${this.url}/empleados/`, empleado, this.requestOptions);
  }

  actualizarEmpleado(empleadoId:string,empleado:EmpleadoModel):Observable<any>{
    return this.http.put(`${this.url}/empleados/${empleadoId}`, empleado, this.requestOptions);
  }

}
