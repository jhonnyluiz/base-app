import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, Sort, MatDialog} from '@angular/material';
import { SistemaService } from '../sistema.service';
import { SistemaDataSource } from '../../../shared/datasources/sistema.data-source';
import { Pagina } from 'src/app/shared/models/pagina';
import { Sistema } from 'src/app/shared/models/sistema';
import { SistemaDialogComponent } from '../sistema-dialog/sistema-dialog.component';
import { EmissorEventService } from 'src/app/shared/services/event/emissor-event.service';
import { ACOES_EVENT } from 'src/app/shared/constants';
import { Evento } from 'src/app/shared/models/evento';

@Component({
  selector: 'app-sistema-table',
  templateUrl: './sistema-table.component.html',
  styleUrls: ['./sistema-table.component.css']
})
export class SistemaTableComponent implements OnInit {

  acao = ACOES_EVENT;
  @ViewChild(MatPaginator) pagination: MatPaginator;
  pagina: Pagina<Sistema> = new Pagina<Sistema>();
  dataSource: SistemaDataSource | null;
  pageSizeOptions: number[] = [10, 15, 20, 50];
  displayedColumns = ['codigoSistema', 'nomeSistema'];
  search;
  sort;


  constructor(private sistemaService: SistemaService, public dialog: MatDialog, private emissorEvent: EmissorEventService) { }

  ngOnInit() {
    this.carregarDados();
    this.emissorEvent.changeEmitted$.subscribe(res => this.chamarMetodo(res));
  }

  chamarMetodo(event: Evento) {
    if (event.acao === this.acao.sistema.novo) {
      const sistema =  new Sistema('', '');
      this.abrirDialog(sistema, 'Novo');
    }
  }

  /**
   * Método responsável por abrir um dialog.
   *
   * @param event
   */
  abrirDialog(obj: Sistema, acao: string) {
    const configDialog = { width: '500px', data: { obj: obj, acao: acao}};
    const dialogRef = this.dialog.open(SistemaDialogComponent, configDialog);
    dialogRef.afterClosed().subscribe(() => this.carregarDados());
  }

  /**
   * Método responsável por carregar os dados.
   *
   * @param event
   */
  carregarDados() {
    this.sistemaService.consultaPaginada(this.pagina, this.search, this.sort)
      .subscribe(data => this.setDados(data));
  }

  /**
   * Método responsável por realizar uma busca entre os dados.
   *
   * @param event
   */
  realizarBusca(filterValue: string) {
    this.search = { param: 'nomeSistema', filter: filterValue };
    this.pagina.number = 0;
    this.carregarDados();
  }

  /**
   * Método responsável por realizar a ordenção de dados na tabela.
   *
   * @param event
   */
  ordenarPagina(sort: Sort) {
    this.sort = { orderBy: sort.active, direction: sort.direction };
    this.carregarDados();
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

  /**
   * Método responsável por retornar um novo dataSource incluindos os dados da lista passada.
   *
   * @param lista
   */
  getDataSource(lista: Sistema[]) {
    return new SistemaDataSource(lista);
  }

  /**
   * Método responsável por setar os dados da paginação e também os dados da tabela.
   *
   * @param dados
   */
  setDados(dados: Pagina<Sistema>) {
    this.pagina = dados;
    this.dataSource = this.getDataSource(dados.content);
  }
}
