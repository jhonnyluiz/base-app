import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaMenuComponent } from './pagina-menu.component';

const routes: Routes = [
    { path: '', component: PaginaMenuComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaMenuRoutingModule { }