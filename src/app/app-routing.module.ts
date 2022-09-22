import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-viagem-de-chihiro',
    loadChildren: () => import('./a-viagem-de-chihiro/a-viagem-de-chihiro.module').then( m => m.AViagemDeChihiroPageModule)
  },  {
    path: 'o-castelo-animado',
    loadChildren: () => import('./o-castelo-animado/o-castelo-animado.module').then( m => m.OCasteloAnimadoPageModule)
  },
  {
    path: 'o-mundo-dos-pequeninos',
    loadChildren: () => import('./o-mundo-dos-pequeninos/o-mundo-dos-pequeninos.module').then( m => m.OMundoDosPequeninosPageModule)
  },
  {
    path: 'meu-amigo-totoro',
    loadChildren: () => import('./meu-amigo-totoro/meu-amigo-totoro.module').then( m => m.MeuAmigoTotoroPageModule)
  },
  {
    path: 'ponyo',
    loadChildren: () => import('./ponyo/ponyo.module').then( m => m.PonyoPageModule)
  },
  {
    path: 'vidas-ao-vento',
    loadChildren: () => import('./vidas-ao-vento/vidas-ao-vento.module').then( m => m.VidasAoVentoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
