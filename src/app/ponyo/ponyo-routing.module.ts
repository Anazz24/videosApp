import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PonyoPage } from './ponyo.page';

const routes: Routes = [
  {
    path: '',
    component: PonyoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PonyoPageRoutingModule {}
