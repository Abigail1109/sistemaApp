import { Component, OnInit } from '@angular/core';
import { MenuPrincipalModel } from '../../../shared/modelos/menuPrincipal.model';
import { MenuPrincipalService } from '../../../shared/servicios/menu-principal.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu-carta',
  templateUrl: './menu-carta.component.html',
  styleUrls: ['./menu-carta.component.css']
})
export class MenuCartaComponent implements OnInit {
  percent = 20;

  productos: MenuPrincipalModel[] = [];
  producto: MenuPrincipalModel  = new MenuPrincipalModel();

  
  
  cantidad : number = 0;
  cargando = false;


  constructor( private menuPrincipalService: MenuPrincipalService ,private router: Router) { }

  ngOnInit(): void {

    /*this.cargando = true;
    this.menuPrincipalService.getMenu()
      .subscribe( resp => {
        this.productos = resp;
        this.cargando = false;

      });*/

      this.menuPrincipalService.getMenu()
      .subscribe( resp => {
        this.productos = resp;

        let customObj = new MenuPrincipalModel();
        customObj.cantidad = 0; 
        this.productos.push(customObj);
        this.cantidad = 0; 
       
       console.log("Values: " + this.productos[0].cantidad)
       console.log('Menu: ' + JSON.stringify({ resp })    );


      });

  }


  agregar() {


    this.producto.nombreProducto = 'Torta';
    this.producto.precio = 15;
    this.producto.personalizado = 'S';
    
   

    console.log('Entra método Agregar : ' +  JSON.stringify({ any: this.producto}));
    this.menuPrincipalService.agregaProducto( this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/roles']);
        },
        err => console.error(err)
       );

       
  }

  disminuyeProducto(producto: any) {
    producto.cantidad -= 1;  

  }

  aumentaProducto(producto: any) {
    
    producto.cantidad += 1;

  }

  cambiaCantidad(valor: any) {
    this.producto.cantidad = valor;
  }


}
