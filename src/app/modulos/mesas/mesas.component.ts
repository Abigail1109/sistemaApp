import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaModel } from 'src/app/shared/modelos/mesa.model';
import { MesasService } from 'src/app/shared/servicios/mesas.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  mesas:Array<MesaModel> = []

  constructor(
    private _mesasServicio:MesasService,
    private router:Router
  ){
    this.getMesas()
  }

  ngOnInit(): void {
  }

  getMesas(){
    this._mesasServicio.getMesas().subscribe({
      next : data =>{
        //console.log('data :>> ', data);
        this.mesas = data.mesas
      },
      error : err=>{
        //console.log('err :>> ', err);
      }
    })
  }

  abrirMenu(mesaId?:string){
    this.router.navigate([`orden/${mesaId}`])
    //console.log('mesaId :>> ', mesaId);
  }

  getStatus(status?:string){
    switch(status){
      case 'D':{ //Disponible
        return 'bg-success'
      }
      case 'O':{
        return 'bg-danger' //Ocupada
      }
      default:{
        return 'bg-secondary'
      }
    }
  }

}
