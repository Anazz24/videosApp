import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuAmigoTotoroPage } from './meu-amigo-totoro.page';

const routes: Routes = [
  {
    path: '',
    component: MeuAmigoTotoroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuAmigoTotoroPageRoutingModule {}
