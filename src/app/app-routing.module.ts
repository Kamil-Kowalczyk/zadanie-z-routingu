import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CzasLokalnyComponent } from './czas-lokalny/czas-lokalny.component';
import { HistoriaComponent } from './historia/historia.component';
import { KinoComponent } from './kino/kino.component';
import { MapaComponent } from './mapa/mapa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SportComponent } from './sport/sport.component';
import { TeatrComponent } from './teatr/teatr.component';

const routes: Routes = [
  {path: 'czas-lokalny', component : CzasLokalnyComponent, children:[
    {path: 'kino', component: KinoComponent},
    {path: 'teatr', component: TeatrComponent},
    {path: 'sport', component: SportComponent},
  ]},
  {path: 'historia', component : HistoriaComponent},
  {path: 'mapa', component : MapaComponent},
  {path: '', redirectTo: '/czas-lokalny', pathMatch:'full'},
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
