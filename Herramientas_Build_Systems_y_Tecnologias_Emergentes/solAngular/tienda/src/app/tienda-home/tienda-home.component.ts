import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-tienda-home',
  templateUrl: './tienda-home.component.html',
  styleUrls: ['./tienda-home.component.css']
})
export class TiendaHomeComponent implements OnInit {

  productos  : Object[];

  constructor(private productosService : ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos((productos:Object[]) => {
      this.productos = productos;
      console.log('Productos (2) -> ', this.productos );
    });

  }

}
