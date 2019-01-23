import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { Sistema } from '../models/sistema';

export class SistemaDataSource extends DataSource<any> {
    constructor(private sistema: Sistema[]) {
        super();
    }

    connect(): Observable<Sistema[]> {
        return of(this.sistema);
    }

    disconnect() {}
}
