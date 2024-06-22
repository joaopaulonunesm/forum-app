import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUsuarioLogado: Boolean = false;

  constructor(private loginService: LoginService) {}

  validarUsuarioLogado(){
    return this.loginService.isLogado()
  }

  public ngOnInit(): void {
    this.isUsuarioLogado = this.validarUsuarioLogado();
  }
}
