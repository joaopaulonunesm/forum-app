import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TopicoService } from 'src/app/services/topico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topicos: any = {
    'data': []
  };

  constructor(private topicoService: TopicoService,
              private loginService: LoginService,
              private router: Router) {}

  buscarTodos(){
    this.topicoService.buscarTodos().subscribe(data => {
      this.topicos = data;
    });
  }

  cadastrarTopico(){
    if(this.loginService.isLogado()){
      this.router.navigate(['/topic']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.buscarTodos();
  }
}
