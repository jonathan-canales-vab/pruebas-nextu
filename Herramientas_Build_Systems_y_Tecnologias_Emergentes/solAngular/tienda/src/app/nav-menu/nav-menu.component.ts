import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  private url : string

  constructor(
    private router: Router,
    private activatedRoute : ActivatedRoute //incluir el módulo ActivatedRoute para determinar el url actual
  ) { }

  ngOnInit() {
      this.url =  this.activatedRoute.snapshot.url[0].path; //Verificar el url actual
      return this.url;
  }

  cerrarSesion() {
    this.router.navigate(['login']);
  }
}
