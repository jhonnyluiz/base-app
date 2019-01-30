import { Component, Inject } from '@angular/core';
import { Sistema } from '../../../shared/models/sistema';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SistemaService } from '../sistema.service';

const POSICAO_MENU = [
  { key: 'H', value: 'Horizontal' },
  { key: 'V', value: 'Vertical' },
];

const ORIGEM_SISTEMA = [
  { key: 'F', value: 'Forms' },
  { key: 'W', value: 'Web' },
];

@Component({
  selector: 'app-sistema-dialog',
  templateUrl: './sistema-dialog.component.html',
})
export class SistemaDialogComponent {

  posicoes = POSICAO_MENU;
  origens = ORIGEM_SISTEMA;
  carregando = false;

  constructor(
    public dialogRef: MatDialogRef<SistemaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { obj: Sistema, acao: string },
    private sistemaService: SistemaService
  ) { }

  cancelar(): void {
    this.dialogRef.close();
  }

  salvar(obj: Sistema) {
    this.carregando = true;
    if (this.data.acao === 'Editar') {
      this.sistemaService
        .atualizar(obj.codigoSistema, obj)
        .subscribe(data => this.returnDados(data));
    } else {
      this.sistemaService
        .criar(obj)
        .subscribe(data => this.returnDados(data));
    }
  }

  excluir(obj: Sistema) {
    this.sistemaService.excluir(obj.codigoSistema)
      .subscribe(data => this.returnDados(data));
  }

  returnDados(obj: Sistema) {
    this.carregando = false;
    this.dialogRef.close();
  }


}
