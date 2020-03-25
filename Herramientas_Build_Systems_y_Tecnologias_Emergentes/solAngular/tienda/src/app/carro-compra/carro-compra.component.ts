import { Component, OnInit } from '@angular/core';
import { CarroCompraService } from '../servicios/carro-compra.service'
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit {

  constructor(
    private carroCompraService : CarroCompraService
    , private productosService : ProductosService
    , private router : Router
  ) { }

  ngOnInit() {
  }

  vaciarCarro() {
    this.carroCompraService.vaciar();
  }

  pagar() {

    for (let item of this.carroCompraService.items()){
      this.productosService.getInfoProducto(item['_key'], (data)=>{
        let nuevoStock = data['stock'] - item['cantidad'];
        this.productosService.actualizaStock(item['_key'], nuevoStock, (data2)=>{

        });
      });
    }


    this.vaciarCarro();
    this.router.navigate(['home']);
  }
}
