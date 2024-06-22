import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginRequest: any = {
    login: '',
    password: ''
  }

  loginResponse: any = {
    'data': []
  };

  constructor(private loginService: LoginService, private tokenService: TokenService, private router: Router) { }

  logar() {
    this.loginService.logar(this.loginRequest).subscribe(data => {
      this.loginResponse = data;
      this.tokenService.adicionarTokenNaSessao(this.loginResponse.data.token)
      this.router.navigate(['/']);
    });
  }

  public ngOnInit(): void {
  }
}
