import { Component, OnInit } from '@angular/core';
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

  constructor(private topicoService: TopicoService) {}

  buscarTodos(){
    this.topicoService.buscarTodos().subscribe(data => {
      this.topicos = data;
    });
  }

  ngOnInit(): void {
    this.buscarTodos();
  }
}
