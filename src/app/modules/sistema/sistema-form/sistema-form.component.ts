import { Component, OnInit } from '@angular/core';
import { SistemaService } from '../sistema.service';
import { Sistema } from 'src/app/shared/models/sistema';
import { ActivatedRoute } from '@angular/router';

const POSICAO_MENU = [
  { key: 'H', value: 'Horizontal' },
  { key: 'V', value: 'Vertical' },
];

const ORIGEM_SISTEMA = [
  { key: 'F', value: 'Forms' },
  { key: 'W', value: 'Web' },
];

@Component({
  selector: 'app-sistema-form',
  templateUrl: './sistema-form.component.html',
  styleUrls: ['./sistema-form.component.css']
})
export class SistemaFormComponent implements OnInit {

  posicoes = POSICAO_MENU;
  origens = ORIGEM_SISTEMA;
  carregando = false;
  sistema: Sistema;
  acao: string;

  constructor(
    private route: ActivatedRoute,
    private sistemaService: SistemaService
  ) { }

  ngOnInit() {
    this.carregando = true;
    const id = this.route.snapshot.params['id'];
    this.acao = this.route.snapshot.data['acao'];
    if (this.acao === 'new') {
      this.sistema = new Sistema('', '');
      this.carregando = false;
    } else if (this.acao === 'edit') {
      this.sistemaService.getById(id).subscribe(
        res => {
          this.setSistema(res);
          this.carregando = false;
        }
      );
    }
  }

  salvar() {
    this.carregando = true;
    if (this.acao === 'new') {
      this.sistemaService
        .criar(this.sistema)
        .subscribe(data => {
          this.acao = 'edit';
          this.voltar(data);
        });
    } else {
      this.sistemaService
        .atualizar(this.sistema.codigoSistema, this.sistema)
        .subscribe(data => this.voltar(data));
    }
  }

  excluir(obj: Sistema) {
    // this.sistemaService.excluir(obj.codigoSistema)
    //   .subscribe(data => this.voltar(data));
  }

  voltar(obj: Sistema) {
    this.carregando = false;
    // Redirect
  }

  setSistema(s: Sistema) {
    this.sistema = s;
  }
}
