import { Component, OnInit, Inject, Input } from '@angular/core';
import { Perfil } from 'src/app/shared/models/perfil';
import { PerfilService } from '../perfil.service';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar,
  MatSnackBarConfig } from '@angular/material';
import { AlertSnackbarComponent } from 'src/app/shared/paginas/alert-snackbar/alert-snackbar.component';

@Component({
  selector: 'app-perfil-dialog',
  templateUrl: './perfil-dialog.component.html'
})
export class PerfilDialogComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  carregando = false;

  constructor(
    public dialogRef: MatDialogRef<PerfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { obj: Perfil, acao: string },
    private perfilService: PerfilService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  salvar(obj: Perfil) {
    this.carregando = true;
    if (this.data.acao === 'Editar') {
      this.perfilService
        .atualizar(obj.codigoPerfil, obj)
        .subscribe(data => this.returnDados(data));
    } else {
      this.perfilService
        .criar(obj)
        .subscribe(() => this.returnDados(obj), res => this.tratarError(res));
    }
  }

  excluir(obj: Perfil) {
    this.perfilService.excluir(obj.codigoPerfil)
      .subscribe(data => this.returnDados(data));
  }

  returnDados(obj: Perfil) {
    this.carregando = false;
    this.dialogRef.close({ obj: obj });
  }

  tratarError(res) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = 6000;
    config.data = { error: res.error };
    config.panelClass = 'error';
    this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    this.carregando = false;
  }
}
