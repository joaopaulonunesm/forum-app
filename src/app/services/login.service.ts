import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:8080";

  endpoint: string = this.baseUrl + '/auth';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  logar(loginRequest: any){
    return this.http.post(this.endpoint + "/login", loginRequest);
  }

  cadastrar(loginRequest: any){
    return this.http.post(this.endpoint + "/register", loginRequest);
  }

  isLogado(){
    return this.tokenService.existeToken();
  }
}
