import { Book } from './../model/book.model';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../model/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  public carrito: Array<Book> = [];
  private subscription: Subscription;
  public total: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      console.log(data);
      this.carrito = data;
      this.total = this.carritoService.getTotal();
    },
      error => alert(error));
  }

}
