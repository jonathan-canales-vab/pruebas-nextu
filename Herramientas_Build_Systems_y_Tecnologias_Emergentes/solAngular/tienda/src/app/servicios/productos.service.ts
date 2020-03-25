import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  productos  : Object[];

  constructor(private http : Http) { }

  getProductos(callback){
    this.http.get('https://prueba-tienda-270215.firebaseio.com/productos/.json')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data: Response) => {

          console.log('Productos (1.1) -> ', data );

          let aux;
          this.productos = [];
          for (let key in data) {
            aux = data[key];
            aux['_key'] = key;
            console.log (key, aux);
            this.productos.push(aux);
          }

          console.log('Productos (1.2) -> ', this.productos );

          callback(this.productos);
        }
      );
    //return this.productos;
  }

  getProducto(idProducto: number){
    for(let prod of this.productos) {
      if(prod['id']== idProducto) {
        return prod;
      }
    }
    return null;
  }

  getInfoProducto(key, callback){
    this.http.get('https://prueba-tienda-270215.firebaseio.com/productos/'+key+'.json')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data: Response) => {

          console.log('getInfoProducto -> ', key, data );

          callback(data);
        }
      );
  }

  actualizaStock(key, stock, callback) {
    let update = {};
    update[key+'/stock'] = stock;
    this.http.patch('https://prueba-tienda-270215.firebaseio.com/productos/.json', update)
      .subscribe(
        (data: Response) => {

          console.log('actualizaStock -> ', data );

          callback(data);
        }
      );
  }
}
