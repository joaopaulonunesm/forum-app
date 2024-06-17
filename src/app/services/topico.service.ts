import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  baseUrl: string = "http://localhost:8080";

  endpoint: string = this.baseUrl + '/topicos';

  constructor(private http: HttpClient) { }

  buscarTodos(){
    return this.http.get(this.endpoint);
  }

  buscarPorId(id: string){
    return this.http.get(this.endpoint + '/' + id);
  }

  publicar(topicoRequest: any){
    return this.http.post(this.endpoint, topicoRequest);
  }
}
