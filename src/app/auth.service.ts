import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
	private username = 'thstall';
	private password = '123456';

	private static readonly key = 'authenticated_user';

	login(username: String, password: String): Observable<boolean> {
		if (this.username === username && this.password === password) {
			localStorage.setItem(AuthService.key, JSON.stringify({ username: this.username }))
			return Observable.of(true);
		}

		return Observable.of(false);
	}

	hasSession(): boolean {
		return localStorage.getItem(AuthService.key) !== null;
	}
}