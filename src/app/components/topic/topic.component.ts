import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TopicoService } from 'src/app/services/topico.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topicoRequest: any = {
    titulo: '',
    conteudo: ''
  }

  constructor(private topicoService: TopicoService, private router: Router) { }

  criar() {
    this.topicoService.publicar(this.topicoRequest).subscribe(data => {
      this.router.navigate(['/']);
    });
  }

  public ngOnInit(): void {
  }
}
