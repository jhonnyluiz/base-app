import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, Sort } from '@angular/material';
import { SistemaService } from '../sistema.service';
import { SistemaDataSource } from '../../../shared/datasources/sistema.data-source';
import { Pagina } from 'src/app/shared/models/pagina';
import { Sistema } from 'src/app/shared/models/sistema';

@Component({
  selector: 'app-sistema-table',
  templateUrl: './sistema-table.component.html',
  styleUrls: ['./sistema-table.component.css']
})
export class SistemaTableComponent implements OnInit {

  @ViewChild(MatPaginator) pagination: MatPaginator;
  pagina: Pagina<Sistema> = new Pagina<Sistema>();
  dataSource: SistemaDataSource | null;
  pageSizeOptions: number[] = [10, 15, 20, 50];
  displayedColumns = ['codigoSistema', 'nomeSistema'];
  search;
  sort;


  constructor(private sistemaService: SistemaService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.sistemaService.consultaPaginada(this.pagina, this.search, this.sort)
        .subscribe(data => this.setDados(data));
  }

  applyFilter(filterValue: string) {
    this.search = { param: 'nomeSistema', filter: filterValue };
    this.pagina.number = 0;
    this.loadData();
  }

  sortData(sort: Sort) {
    this.sort = { orderBy: sort.active, direction: sort.direction };
    this.loadData();
  }

  onPaginationChange(event) {
    this.pagina.number = event.pageIndex;
    this.pagina.size = event.pageSize;
    this.loadData();
  }

  getDataSource(lista: Sistema[]) {
    return new SistemaDataSource(lista);
  }

  setDados(dados: Pagina<Sistema>) {
    this.pagina = dados;
    this.dataSource = this.getDataSource(dados.content);
  }
}
