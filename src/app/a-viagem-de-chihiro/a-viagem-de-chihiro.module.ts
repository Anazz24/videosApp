import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AViagemDeChihiroPageRoutingModule } from './a-viagem-de-chihiro-routing.module';

import { AViagemDeChihiroPage } from './a-viagem-de-chihiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AViagemDeChihiroPageRoutingModule
  ],
  declarations: [AViagemDeChihiroPage]
})
export class AViagemDeChihiroPageModule {}
