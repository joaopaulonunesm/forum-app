import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  baseUrl: string = "http://localhost:8080";

  endpoint: string = this.baseUrl + '/comentarios';

  constructor(private http: HttpClient) { }

  buscarPorTopico(idTopico: string){
    return this.http.get(this.endpoint + '/' + idTopico);
  }

  comentar(idTopico: string, comentarioRequest: any){
    let endpoint = this.endpoint + '/' + idTopico;
    return this.http.post(endpoint, comentarioRequest);
  }
}
