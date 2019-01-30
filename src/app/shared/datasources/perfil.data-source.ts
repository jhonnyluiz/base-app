import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { Perfil } from '../models/perfil';

export class PerfilDataSource extends DataSource<any> {
    constructor(private perfil: Perfil[]) {
        super();
    }

    connect(): Observable<Perfil[]> {
        return of(this.perfil);
    }

    disconnect() {}
}
