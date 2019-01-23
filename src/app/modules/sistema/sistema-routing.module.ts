import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaComponent } from './sistema.component';
import { SistemaTableComponent } from './sistema-table/sistema-table.component';

const routes: Routes = [
    {
        path: '',
        component: SistemaComponent,
        children: [
            {
                path: 'list',
                component: SistemaTableComponent
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SistemaRoutingModule { }
