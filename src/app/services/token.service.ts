import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private TOKEN_KEY = "token";

  constructor(private sessionStorageService: SessionStorageService) { }

  adicionarTokenNaSessao(token: string): void {
    this.sessionStorageService.setItem(this.TOKEN_KEY, token);
  }

  buscarTokenDaSessao() {
    return "Bearer " + this.sessionStorageService.getItem(this.TOKEN_KEY);
  }

  existeToken() {
    return Boolean(this.sessionStorageService.getItem(this.TOKEN_KEY));
  }
}
