import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OMundoDosPequeninosPage } from './o-mundo-dos-pequeninos.page';

const routes: Routes = [
  {
    path: '',
    component: OMundoDosPequeninosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OMundoDosPequeninosPageRoutingModule {}
