import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from './account';

@Injectable()
export class AccountService {
	private DATA = [
		{ id: 1, name: "Checkings" }
	]

	get(): Observable<Account[]> {
		return Observable.of(this.DATA);
	}

	getById(id: number): Observable<Account> {
		let index = this.indexOfItemWithId(id);
		if (index >= 0) {
			return Observable.of(this.DATA[index]);
		} else {
			return Observable.empty();
		}
	}

	create(account: Account): Observable<Account> {
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

	private indexOfItemWithId(id: number): number {
		for (let i = 0; i < this.DATA.length; i++) {
			if (this.DATA[i].id == id) {
				return i;
			}
		}
		return undefined;
	}
}