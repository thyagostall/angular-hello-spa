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
		return Observable.of(this.DATA[0]);
	}
}