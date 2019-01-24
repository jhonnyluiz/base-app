import { SistemaComponent } from './../../../modules/sistema/sistema.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaMenuComponent } from './pagina-menu.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: PaginaMenuComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'sistema',
                component: SistemaComponent,
                loadChildren: '../../../modules/sistema/sistema.module#SistemaModule'
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaMenuRoutingModule { }
