import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as Rx from 'rxjs';
import { Book } from './book.model';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  private subject: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  
  private itemsCarrito:Book[] = [];

  constructor() {
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  /**
   * addCarrito
   * @param book
   */
  addCarrito(book: Book) {
    this.subject.next([...this.itemsCarrito, book]);
  }

  /**
   * clearCarrito
   */
  clearCarrito() {
    this.subject.next(null);
  }

  /**
   * getCarrito
   */
  getCarrito(): Observable<Book[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    return this.itemsCarrito.reduce((total, book: Book) => { return total + book.price; }, 0);
  }

  


}
