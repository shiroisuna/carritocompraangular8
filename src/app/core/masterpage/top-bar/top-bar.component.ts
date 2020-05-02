import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/model/carrito.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styles: []
})
export class TopBarComponent implements OnInit {
  public total: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      this.total = this.carritoService.getTotal();
    },
      error => alert(error));
  }

}
