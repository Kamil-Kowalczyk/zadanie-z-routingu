import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CzasLokalnyComponent } from './czas-lokalny/czas-lokalny.component';
import { MapaComponent } from './mapa/mapa.component';
import { HistoriaComponent } from './historia/historia.component';
import { KinoComponent } from './kino/kino.component';
import { TeatrComponent } from './teatr/teatr.component';
import { SportComponent } from './sport/sport.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CzasLokalnyComponent,
    MapaComponent,
    HistoriaComponent,
    KinoComponent,
    TeatrComponent,
    SportComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
