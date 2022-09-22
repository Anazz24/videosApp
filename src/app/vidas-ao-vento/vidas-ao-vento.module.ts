import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidasAoVentoPageRoutingModule } from './vidas-ao-vento-routing.module';

import { VidasAoVentoPage } from './vidas-ao-vento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidasAoVentoPageRoutingModule
  ],
  declarations: [VidasAoVentoPage]
})
export class VidasAoVentoPageModule {}
