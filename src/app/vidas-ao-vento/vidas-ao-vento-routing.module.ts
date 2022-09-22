import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidasAoVentoPage } from './vidas-ao-vento.page';

const routes: Routes = [
  {
    path: '',
    component: VidasAoVentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidasAoVentoPageRoutingModule {}
