import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TiendaHomeComponent } from './tienda-home/tienda-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: TiendaHomeComponent},
  //{ path: 'tienda/detalle-producto/:id', component: DetalleProductoComponent},
  //{ path: 'carrito', component: CarritoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TiendaRoutingModule { }
