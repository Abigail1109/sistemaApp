import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  pestanaActiva:string = 'M';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPestana(opcion:string){
    if (this.pestanaActiva!=opcion) this.pestanaActiva=opcion ;
    console.log('this.pestanaActiva :>> ', this.pestanaActiva);
  }

}
