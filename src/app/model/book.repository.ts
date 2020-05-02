import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Book } from './book.model';
// import { StaticDatasource } from './static.datasource';


@Injectable()

export class BookRepository {

	

	public books: Array<Book> = [];

	

	constructor(){

		for (let i = 1; i < 10; i++) { // Creamos un conjunto de 20 productos de prueba
	      const book = new Book();
	      book.id = (i + 1);
	      book.genre = 'Drama ${i}';
	      book.name = `Romeo y Julieta ${i}`;
	      book.synopsys = 'Lorem ipsum dolor sit amet...';
	      book.price = i * 10 + 100;
	      book.author = `Shakespeare, Editorial JAMP-${i}`;
	      book.starts = 4;
	      book.image = '';
	      book.novedad = (i < 6); // Marcamos como novedad los 6 primeros
	      this.books.push(book);
	    }

	
	}


	
	getBooks(){
		return new Promise ((resolve, reject) => {
			if(this.books.length>0){
				resolve(this.books);
			}else{
				reject('No hay Productos en el carrito');
			}
		 })
		
	}

	// getBook(id: number = null): Book {
	// 	return this.books.find(b => b.id === id);
	// }


	

}
