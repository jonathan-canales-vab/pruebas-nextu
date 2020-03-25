import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { CarroCompraService } from '../servicios/carro-compra.service'

@Component({
  selector: 'app-tienda-home',
  templateUrl: './tienda-home.component.html',
  styleUrls: ['./tienda-home.component.css']
})
export class TiendaHomeComponent implements OnInit {

  productos  : Object[];
  private productoCarrito : Object;

  constructor(
    private productosService : ProductosService
    , private carroCompraService : CarroCompraService
  ) { }

  ngOnInit() {
    this.productosService.getProductos((productos:Object[]) => {
      this.productos = productos;
      console.log('Productos (2) -> ', this.productos );
    });

  }

  agregarProducto(id:number, cantidad:number){
      for (let item of this.productos){
        if(item['id'] == id){
          if(item['stock'] < cantidad){
            window.alert('Máxima existencia es: '+ item['disponible']);
          }else{
            let cantidadActual = item['stock'];
            this.productoCarrito = {
              "_key": item['_key'],
              "id": item['id'],
              "nombre": item['nombre'],
              "img": item['img'],
              "precio": item['precio'],
              "cantidad": Number(cantidad)
            }
            this.carroCompraService.agregar(this.productoCarrito);
            item['stock'] = cantidadActual - cantidad;

          }
        }
      }
    }
}
