import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OCasteloAnimadoPage } from './o-castelo-animado.page';

const routes: Routes = [
  {
    path: '',
    component: OCasteloAnimadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OCasteloAnimadoPageRoutingModule {}
