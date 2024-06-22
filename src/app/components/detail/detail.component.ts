import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { LoginService } from 'src/app/services/login.service';
import { TopicoService } from 'src/app/services/topico.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  isUsuarioLogado: Boolean = false;

  textoComentario: string = '';

  topico: any = {
    'data': {}
  };

  comentarios: any = {
    'data': []
  };

  constructor(private route: ActivatedRoute,
              private topicoService: TopicoService,
              private comentarioService: ComentarioService,
              private loginService: LoginService) {}

  buscarTopico(idTopico: string){
    this.topicoService.buscarPorId(idTopico).subscribe(data => {
      this.topico = data;
    });
  }

  buscarComentarios(idTopico: string){
    this.comentarioService.buscarPorTopico(idTopico).subscribe(data => {
      this.comentarios = data;
    });
  }

  comentar(){
    let idTopico = this.route.snapshot.params["id"];
    let comentarioRequest = {'texto': this.textoComentario};
    this.comentarioService.comentar(idTopico, comentarioRequest).subscribe(data => {
      this.textoComentario = '';
      this.buscarComentarios(idTopico);
    });
  }

  validarUsuarioLogado(){
    return this.loginService.isLogado()
  }

  public ngOnInit(): void {
    let idTopico = this.route.snapshot.params["id"];
    this.buscarTopico(idTopico);
    this.buscarComentarios(idTopico);
    this.isUsuarioLogado = this.validarUsuarioLogado();
  }
}
