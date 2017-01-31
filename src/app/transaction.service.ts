import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

@Injectable()
export class TransactionService {
	private DATA = [
		{ id: 1, title: "Grocery", date: new Date(2017, 1, 15), value:-122.77 }
	]

	create(transaction: Transaction): Observable<Transaction> {
		let id = this.DATA[this.DATA.length - 1].id;		
		transaction.id = id + 1;

		this.DATA.push(transaction);
		return Observable.of(transaction);
	}

	update(transaction: Transaction): Observable<Transaction> {
		return Observable.of(transaction);
	}

	delete(transaction: Transaction): Observable<boolean> {
		let index;
		for (var i = 0; i < this.DATA.length; i++) {
			if (this.DATA[i].id === transaction.id) {
				index = i;
			}
		}

		this.DATA.splice(index, 1);
		return Observable.of(index);
	}

	get(): Observable<Transaction[]> {
		return Observable.of(this.DATA as Transaction[]);
	}

	getById(id: number): Observable<Transaction> {
		let index;
		for (var i = 0; i < this.DATA.length; i++) {
			if (this.DATA[i].id === id) {
				index = i;
			}
		}

		return Observable.of(this.DATA[index]);
	}
}