import { Injectable } from '@angular/core';
import { CrudHttpService } from '../../shared/services/http/crud-http.service';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../../shared/models/perfil';

@Injectable()
export class PerfilService extends CrudHttpService<Perfil> {

    path = '/perfis';
    teste;
    constructor(public http: HttpClient) {
        super(http);
    }
}
