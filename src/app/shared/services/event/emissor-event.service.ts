import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Evento } from '../../models/evento';

@Injectable({
    providedIn: 'root',
  })
export class EmissorEventService {

    private emitChangeSource = new Subject<any>();

    constructor() {}

    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(change: Evento) {
        this.emitChangeSource.next(change);
    }
}
