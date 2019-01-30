import { ACOES_EVENT } from 'src/app/shared/constants';
import { Pagina } from 'src/app/shared/models/pagina';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { PerfilDataSource } from 'src/app/shared/datasources/perfil.data-source';
import { Perfil } from 'src/app/shared/models/perfil';
import { Evento } from 'src/app/shared/models/evento';
import { PerfilDialogComponent } from '../perfil-dialog/perfil-dialog.component';
import { PerfilService } from '../perfil.service';
import { EmissorEventService } from 'src/app/shared/services/event/emissor-event.service';
import { Sistema } from 'src/app/shared/models/sistema';

@Component({
  selector: 'app-perfil-table',
  templateUrl: './perfil-table.component.html',
  styleUrls: ['./perfil-table.component.css']
})
export class PerfilTableComponent implements OnInit {

  @Input() codigoSistema: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['codigoPerfil', 'descricaoPerfil', 'nomeRole', 'nomeFormInicial'];
  perfis: Perfil[];
  dataSource: PerfilDataSource | null;
  pagina: Pagina<Perfil> = new Pagina<Perfil>();
  acao = ACOES_EVENT;
  search;

  constructor(
    private dialog: MatDialog,
    private perfilService: PerfilService,
    private emissorEvent: EmissorEventService
  ) { }

  ngOnInit() {
    this.pagina.size = 5;
    this.search = { param: 'codigoSistema', filter: this.codigoSistema };
    this.emissorEvent.changeEmitted$.subscribe(res => this.chamarMetodo(res));
    this.carregarDados();
  }

  chamarMetodo(event: Evento) {
    if (event.acao === this.acao.perfil.novo) {
      this.abrirDialog(new Perfil(new Sistema(this.codigoSistema, '')), 'Novo');
    }
  }

  /**
   * Método responsável por abrir um dialog.
   *
   * @param event
   */
  abrirDialog(obj: Perfil, acao: string) {
    const configDialog = { width: '500px', data: { obj: obj, acao: acao} };
    const dialogRef = this.dialog.open(PerfilDialogComponent, configDialog);
    dialogRef.afterClosed().subscribe(() => this.carregarDados());
  }

  /**
   * Método responsável por carregar os dados.
   *
   * @param event
   */
  carregarDados() {
    this.perfilService.consultaPaginada(this.pagina, this.search)
      .subscribe(data => this.setDados(data));
  }

  /**
   * Método responsável por setar os dados da paginação e também os dados da tabela.
   *
   * @param dados
   */
  setDados(dados: Pagina<Perfil>) {
    this.pagina = dados;
    this.dataSource = this.getDataSource(dados.content);
  }

  /**
   * Método responsável por retornar um novo dataSource incluindos os dados da lista passada.
   *
   * @param lista
   */
  getDataSource(lista: Perfil[]) {
    return new PerfilDataSource(lista);
  }

  /**
   * Método responsável por realizar a troca de paginas na tabela.
   *
   * @param event
   */
  alterarPagina(event) {
    this.pagina.number = event.pageIndex;
    this.pagina.size = event.pageSize;
    this.carregarDados();
  }
}
