import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaErro404Component } from './shared/paginas/pagina-erro404/pagina-erro404.component';

const routes: Routes = [
    {
        path: 'erro404',
        component: PaginaErro404Component
    },
    {
        path: '',
        loadChildren: './shared/paginas/pagina-menu/pagina-menu.module#PaginaMenuModule'
    },
    {
        path: '**',
        redirectTo: 'erro404',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
