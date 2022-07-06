import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modulos/inicio/inicio.component';
import { MenuPrincipalComponent } from './modulos/menu-principal/menu-principal.component';
import { MesasComponent } from './modulos/mesas/mesas.component';


const routes: Routes = [
  { path: 'menuPrincipal', component: MenuPrincipalComponent },
  { path: 'mesas', component: MesasComponent },
  { path: '**', component: InicioComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
