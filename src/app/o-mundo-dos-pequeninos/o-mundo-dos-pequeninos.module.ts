import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OMundoDosPequeninosPageRoutingModule } from './o-mundo-dos-pequeninos-routing.module';

import { OMundoDosPequeninosPage } from './o-mundo-dos-pequeninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OMundoDosPequeninosPageRoutingModule
  ],
  declarations: [OMundoDosPequeninosPage]
})
export class OMundoDosPequeninosPageModule {}
