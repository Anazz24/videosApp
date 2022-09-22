import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OCasteloAnimadoPageRoutingModule } from './o-castelo-animado-routing.module';

import { OCasteloAnimadoPage } from './o-castelo-animado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OCasteloAnimadoPageRoutingModule
  ],
  declarations: [OCasteloAnimadoPage]
})
export class OCasteloAnimadoPageModule {}
