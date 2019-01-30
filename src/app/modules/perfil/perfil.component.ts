import { EmissorEventService } from './../../shared/services/event/emissor-event.service';
import { ACOES_EVENT } from 'src/app/shared/constants';
import { Sistema } from './../../shared/models/sistema';
import { Component, OnInit, Input } from '@angular/core';
import { Perfil } from 'src/app/shared/models/perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() codigoSistema: string;
  acao = ACOES_EVENT;

  constructor(private emissorEvent: EmissorEventService) {}
  novoPerfil(): void {
    this.emissorEvent.emitChange({ acao: this.acao.perfil.novo });
  }

  ngOnInit() {}

}
