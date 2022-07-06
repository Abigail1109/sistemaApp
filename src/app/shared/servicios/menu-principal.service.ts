import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuPrincipalModel } from '../../shared/modelos/menuPrincipal.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuPrincipalService {

  private url = 'https://carnitas-la-luz-default-rtdb.firebaseio.com/';


  constructor( private http: HttpClient ) { }

  getMenu() {
    return this.http.get(`${ this.url }/productos.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( menuObj: any ) {

    const productos: MenuPrincipalModel[] = [];

    Object.keys( menuObj ).forEach( key => {

      const producto: MenuPrincipalModel = menuObj[key];
      producto.id = key;
      console.log("ID: ---->>" + producto.id)

      productos.push( producto );
    });


    return productos;

  }


  agregaProducto( producto: MenuPrincipalModel ) {
    return this.http.post(`${this.url}/productos/create/`, producto);
  }


}
