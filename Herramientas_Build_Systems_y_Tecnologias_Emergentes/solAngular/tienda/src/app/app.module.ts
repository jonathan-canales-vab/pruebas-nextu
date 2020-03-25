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
import { CarroCompraService } from './servicios/carro-compra.service'
import { DetalleProdComponent } from './detalle-prod/detalle-prod.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TiendaHomeComponent,
    NavMenuComponent,
    DetalleProdComponent,
    CarroCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TiendaRoutingModule
  ],
  providers: [ProductosService, CarroCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
