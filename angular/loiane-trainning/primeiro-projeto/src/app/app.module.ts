import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component],
  imports: [BrowserModule, AppRoutingModule, CursosModule],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
