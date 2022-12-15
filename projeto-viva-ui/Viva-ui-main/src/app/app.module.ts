import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToobarComponent } from './toolbar/toobar.component';
import { AboutComponent } from './about/about.component';
import { ActionsComponent } from './actions/actions.component';
import { EventsModule } from './events/events.module';
import { EventoCadastroComponent } from './eventos/evento-cadastro/evento-cadastro.component';
import { EventosListagemComponent } from './eventos/eventos-listagem/eventos-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToobarComponent,
    AboutComponent,
    ActionsComponent,
    // EventoCadastroComponent,
    // EventosListagemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    EventsModule,
  ],
})
export class AppModule {}
