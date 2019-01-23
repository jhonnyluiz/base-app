import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagina } from '../../models/pagina';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService<T> {

  path: string;

  constructor(public http: HttpClient) { }

  getTodos(): Observable<T> {
    return this.http.get<T>(this.getPath());
  }

  consultaPaginada(pagina: Pagina<T>, search?, sort?): Observable<Pagina<T>> {
    return this.http.get<Pagina<T>>(this.getPathPaginado(pagina, search, sort));
  }

  private getPath(addPath = '') {
    return environment.api_url + this.path + addPath;
  }

  private getPathPaginado(pagina: Pagina<T>, search, sort) {
    let pathParams = this.addParam('page', pagina.number);
    pathParams = this.addParam('linesPerPage', pagina.size, pathParams);
    pathParams = this.addSort(sort, pathParams);
    pathParams = this.addSearch(search, pathParams);
    return this.getPath('/paginado' + pathParams);
  }


  private addSearch(search, pathParams) {
    if (search) {
      pathParams = this.addParam('searchParam', search['param'] + ':' + search['filter'], pathParams);
    }
    return pathParams;
  }

  private addSort(sort, pathParams) {
    if (sort) {
      pathParams = this.addParam('orderBy', sort['orderBy'], pathParams);
      pathParams = this.addParam('direction', sort['direction'], pathParams);
    }
    return pathParams;
  }

  private addParam(nomeParam, param, path?) {
    if (param !== undefined && param != null && param !== '') {
      if (path !== undefined && path != null && path !== '') {
        return path + '&' + nomeParam + '=' + param;
      }
      return '?' + nomeParam + '=' + param;
    }
    return '';
  }
}
