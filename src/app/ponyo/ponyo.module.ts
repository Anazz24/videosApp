import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PonyoPageRoutingModule } from './ponyo-routing.module';

import { PonyoPage } from './ponyo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PonyoPageRoutingModule
  ],
  declarations: [PonyoPage]
})
export class PonyoPageModule {}
