import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../model/carrito.service';
import { BookRepository } from './../model/book.repository';
import { Book } from './../model/book.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
  providers: [BookRepository]
})
export class SidebarComponent implements OnInit {
  
  public books: any = [];

  constructor(private carritoService: CarritoService, private repository: BookRepository) { }

  ngOnInit() {
    this.getNovedades();
  }

  /**
    Obtener los productos que son novedad
   */
  getNovedades() {
    this.repository.getBooks()
      .then(data => {
        this.books = (data as Array<Book>).filter(x => x.novedad);
      })
      .catch(error => alert(error));
  }

  /**
    addProducto
   */
  addBook(book) {
    this.carritoService.addCarrito(book);
  }

}
