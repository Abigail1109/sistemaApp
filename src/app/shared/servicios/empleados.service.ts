import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';

// Modelos
//import { EmpleadoModel} from '../modelos/menuPrincipal.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
   
  private url = 'https://carnitas-la-luz-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

}
