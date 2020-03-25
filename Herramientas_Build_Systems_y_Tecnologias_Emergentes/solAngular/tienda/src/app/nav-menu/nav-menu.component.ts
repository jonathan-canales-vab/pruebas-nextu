import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarroCompraService } from '../servicios/carro-compra.service'

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  private url : string

  constructor(
    private router: Router
    , private activatedRoute : ActivatedRoute
    , private carroCompraService : CarroCompraService
  ) { }

  ngOnInit() {
      this.url =  this.activatedRoute.snapshot.url[0].path; //Verificar el url actual
      return this.url;
  }

  cerrarSesion() {
    this.router.navigate(['login']);
  }
}
