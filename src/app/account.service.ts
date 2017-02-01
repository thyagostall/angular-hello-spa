import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from './account';

@Injectable()
export class AccountService {
	private DATA = [
		{ id: 1, name: "Checkings" },
		{ id: 2, name: "Savings" },
		{ id: 3, name: "Credit Card" }
	]

	get(): Observable<Account[]> {
		return Observable.of(this.DATA);
	}

	getById(id: number): Observable<Account> {
		let index = this.indexOfItemWithId(id);
		if (index >= 0) {
			return Observable.of(this.cloneItem(this.DATA[index]));
		} else {
			return Observable.empty();
		}
	}

	create(account: Account): Observable<Account> {
		let itemId = this.DATA[this.DATA.length - 1].id;

		account.id = itemId + 1;

		this.DATA.push(account);
		return Observable.of(account);
	}

	update(account: Account): Observable<Account> {
		let index = this.indexOfItemWithId(account.id);
		if (index) {
			this.DATA[index] = account;
		}
		return Observable.of(account);
	}

	delete(account: Account): Observable<number> {
		let index = this.indexOfItemWithId(account.id);
		this.DATA.splice(index, 1);
		return Observable.of(account.id);	
	}

	private cloneItem(account: Account): Account {
		let result = new Account();
		result.id = account.id;
		result.name = account.name;
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