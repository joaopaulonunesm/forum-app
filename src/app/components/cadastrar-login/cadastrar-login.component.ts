import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.scss']
})
export class CadastrarLoginComponent implements OnInit {

  loginRequest: any = {
    login: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router) { }

  cadastrar() {
    this.loginService.cadastrar(this.loginRequest).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  public ngOnInit(): void {
  }

}
