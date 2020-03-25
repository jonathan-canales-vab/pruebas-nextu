import { Injectable } from '@angular/core';

@Injectable()
export class CarroCompraService {
  public lista : Object[] = [];

  constructor() {

   }

  items(){
    if(sessionStorage.getItem("Carrito")){
      this.lista = JSON.parse(sessionStorage.getItem("Carrito"));
      return JSON.parse(sessionStorage.getItem("Carrito"));
    }
    return [];
  }

  agregar(item){
    if(this.guardar(item) == false){
      this.lista.push(item)
    }
    sessionStorage.setItem("Carrito", JSON.stringify(this.lista));
  }

  guardar(itemNuevo){
    if(this.lista.length > 0){
      for(let item of this.lista){
        if(item['id'] == itemNuevo.id){
          item['cantidad'] = Number(item['cantidad']) + Number(itemNuevo.cantidad)
          return true
        }
      }
      return false;
    }
    return false;
  }
  contador(){
    return this.items().length
  }

  total(){
    let total = 0;
    if(this.lista.length > 0){
      for(let item of this.lista){
        total = total + (Number(item['cantidad']) + Number(item['precio']))
      }
    }
    return total;
  }

  vaciar(){
    sessionStorage.setItem("Carrito", JSON.stringify([]));
  }

}
