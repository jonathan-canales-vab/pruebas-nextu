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
            console.log (key, aux);
            this.productos.push(aux);
          }

          console.log('Productos (1.2) -> ', this.productos );

          callback(this.productos);
        }
      );
    //return this.productos;
  }
}
