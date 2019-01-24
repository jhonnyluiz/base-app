import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sistema } from 'src/app/shared/models/sistema';
import { SistemaDialogComponent } from './sistema-dialog/sistema-dialog.component';
import { SistemaService } from './sistema.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EmissorEventService } from 'src/app/shared/services/event/emissor-event.service';
import { ACOES_EVENT } from 'src/app/shared/constants';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  sistema: Sistema;
  acao = ACOES_EVENT;

  constructor(public dialog: MatDialog, private emissorEvent: EmissorEventService) {}

  ngOnInit() {
  }

  /**
   * Método responsável por abrir um dialog para criação de dados.
   *
   * @param event
   */
  novoSistema(): void {
    this.emissorEvent.emitChange({ acao: this.acao.sistema.novo });
  }

}
