import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TiendaRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { TiendaHomeComponent } from './tienda-home/tienda-home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { ProductosService } from './servicios/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TiendaHomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TiendaRoutingModule //Agregar el modulo TiendaRouting para el manejo de las URL
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
