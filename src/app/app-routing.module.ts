import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modulos/inicio/inicio.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { MenuPrincipalComponent } from './modulos/menu-principal/menu-principal.component';
import { MesasComponent } from './modulos/mesas/mesas.component';


const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'menuPrincipal', component:MenuPrincipalComponent },
  { path:'mesas', component:MesasComponent },
  { path:'**', pathMatch:'full', redirectTo:'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
