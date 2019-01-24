import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaComponent } from './sistema.component';
import { SistemaTableComponent } from './sistema-table/sistema-table.component';

const routes: Routes = [
    {
        path: 'list',
        component: SistemaTableComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SistemaRoutingModule { }
