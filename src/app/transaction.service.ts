import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

@Injectable()
export class TransactionService {
	private DATA = [
		{ id: 1, title: "Grocery", date: new Date(2017, 0, 2), value: -122.77 },
		{ id: 2, title: "Liquor Store", date: new Date(2016, 11, 30), value: -25 }
	]

	create(transaction: Transaction): Observable<Transaction> {
		let id = this.DATA[this.DATA.length - 1].id;		
		transaction.id = id + 1;

		this.DATA.push(transaction);
		return Observable.of(transaction);
	}

	update(transaction: Transaction): Observable<Transaction> {
		let i = this.indexOfItemWithId(transaction.id);
		console.log("Type: " + transaction.date.constructor.name);
		this.DATA[i] = transaction;
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
			if (this.DATA[i].id == id) {
				index = i;
			}
		}

		return Observable.of(this.cloneItem(this.DATA[index]));
	}

	private cloneItem(account: Transaction): Transaction {
		let result = new Transaction();
		result.id = account.id;
		result.title = account.title;
		result.date = account.date;
		result.value = account.value;
		return result;
	}

	private indexOfItemWithId(id: number): number {
		for (let i = 0; i < this.DATA.length; i++) {
			if (this.DATA[i].id == id) {
				return i;
			}
		}
		return undefined;
	}	
}