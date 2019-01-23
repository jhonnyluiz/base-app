import { Injectable } from '@angular/core';
import { CrudHttpService } from '../../shared/services/http/crud-http.service';
import { Sistema } from '../../shared/models/sistema';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SistemaService extends CrudHttpService<Sistema> {

    path = '/sistemas';
    constructor(public http: HttpClient) {
        super(http);
     }
}
