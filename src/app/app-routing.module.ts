import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modulos/login/login/login.component';
import { MenuPrincipalComponent } from './modulos/menu/menu-principal/menu-principal.component';
import { MesasComponent } from './modulos/mesas/mesas.component';


const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'orden/:idMesa', component:MenuPrincipalComponent },
  { path:'mesas', component:MesasComponent },
  { path:'**', pathMatch:'full', redirectTo:'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
