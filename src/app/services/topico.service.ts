import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  baseUrl: string = "http://localhost:8080";

  endpoint: string = this.baseUrl + '/topicos';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  buscarTodos(){
    return this.http.get(this.endpoint);
  }

  buscarPorId(id: string){
    return this.http.get(this.endpoint + '/' + id);
  }

  publicar(topicoRequest: any){
    return this.http.post(this.endpoint, topicoRequest, {
      headers: {
        'Authorization': this.tokenService.buscarTokenDaSessao(),
      }
    });
  }
}
