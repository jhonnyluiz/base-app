import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaTableComponent } from './sistema-table/sistema-table.component';
import { SistemaFormComponent } from './sistema-form/sistema-form.component';

const routes: Routes = [
    {
        path: 'list',
        component: SistemaTableComponent
    },
    {
        path: 'new',
        component: SistemaFormComponent,
        data: {
            acao: 'new'
        }
    },
    {
        path: 'edit/:id',
        component: SistemaFormComponent,
        data: {
            acao: 'edit'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SistemaRoutingModule { }
