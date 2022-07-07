import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/modelos/usuario.model';
import { UsuariosService } from 'src/app/shared/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});
  usuario = new UsuarioModel();
  errorLogin = "";

  constructor(
    private fb:FormBuilder,
    private _usuariosServicio:UsuariosService,
    private router:Router
  ){
    this.crearLoginForm()
  }

  ngOnInit(): void {
  }

  crearLoginForm(){
    this.loginForm = this.fb.group({
      correo: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  login(){

    if( this.loginForm.invalid ){
      return Object.values( this.loginForm.controls ).forEach(control=>{
        control.markAsTouched();
      })
    }

    this.usuario = {
      correo : this.loginForm.get('correo')?.value,
      password : this.loginForm.get('password')?.value,
    }

    this._usuariosServicio.login(this.usuario).subscribe({
      next: data=>{
        //console.log("Hizo next =>",data);
        localStorage.setItem('token',data?.jwtoken)
        localStorage.setItem('usuario',JSON.stringify(data?.user))
        
        this.router.navigate(['mesas'])
      },
      error : error=>{
        this.errorLogin = error.error.message;
      }
    })
  
}

  validadorCampo(campo:string){
    return this.loginForm.get(campo)?.touched && this.loginForm.get(campo)?.invalid;
  }

}
