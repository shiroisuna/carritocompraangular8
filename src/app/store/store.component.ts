import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';


@Component({
	selector: 'store',
	templateUrl: 'store.component.html',

})

export class StoreComponent {

	

	constructor(private repository: BookRepository ) {



	}

	

	

	
}