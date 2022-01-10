import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CadastroMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
