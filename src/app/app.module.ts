import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { MesasComponent } from './modulos/mesas/mesas.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { MenuPrincipalComponent } from './modulos/menu/menu-principal/menu-principal.component'
import { MenuCartaComponent } from './modulos/menu/menu-carta/menu-carta.component';
import { OrdenComponent } from './modulos/menu/orden/orden.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    MesasComponent,
    LoginComponent,
    MenuPrincipalComponent,
    MenuCartaComponent,
    OrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
