import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

export class TransactionService {
	private DATA = [
		{ id: 1, title: "Grocery", date: new Date(2017, 1, 15), value:-122.77 }
	]

	create(transaction: Transaction): Observable<Transaction> {
		let id = this.DATA[this.DATA.length - 1].id;
		id = id + 1;
		
		transaction.id = id;

		this.DATA.push(transaction);
		return Observable.of(transaction);
	}

	get(): Observable<Transaction[]> {
		return Observable.of(this.DATA as Transaction[]);
	}
}