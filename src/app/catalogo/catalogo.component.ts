import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../model/carrito.service';
import { Subscription } from 'rxjs';
import { Book } from './../model/book.model';
import { BookRepository } from './../model/book.repository';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: [ './catalogo.component.css' ],
  providers: [BookRepository]
})
export class CatalogoComponent implements OnInit {
  
  public book: any;
  public subscription: Subscription;
  public books: Array<any> = [];

  constructor(private carritoService: CarritoService, private repository: BookRepository) { }

  ngOnInit() {
    this.getCatalogo();
  }

  /**
   * getCatalogo: Obtener los libros que NO son novedades
   */
  getCatalogo() {
    this.repository.getBooks()
      .then(data => {
        this.book = (data as Array<Book>).filter(x => x.novedad !== true);
      })
      .catch(error => alert(error));
  }

  /**
   * addBook
   */
  addBook(book) {
    this.carritoService.addCarrito(book);
  }

}
