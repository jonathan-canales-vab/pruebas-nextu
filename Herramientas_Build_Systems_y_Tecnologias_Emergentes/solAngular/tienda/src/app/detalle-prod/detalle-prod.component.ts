import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'detalle-prod',
  templateUrl: './detalle-prod.component.html',
  styleUrls: ['./detalle-prod.component.css']
})
export class DetalleProdComponent implements OnInit {

  producto : Object;

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private productosService : ProductosService
  ) { }

  ngOnInit() {
    this.detalleProducto();
  }

  detalleProducto(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log('Detalle id -> ', id);

      this.producto = this.productosService.getProducto(id);
      console.log('Detalle producto -> ', this.producto);
    });
  }
}
