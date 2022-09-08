import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AViagemDeChihiroPage } from './a-viagem-de-chihiro.page';

const routes: Routes = [
  {
    path: '',
    component: AViagemDeChihiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AViagemDeChihiroPageRoutingModule {}
