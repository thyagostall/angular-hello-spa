import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	private username = 'thstall';
	private password = '123456';

	private static readonly key = 'authenticated_user';

	login(username: String, password: String) {
		if (this.username === username && this.password === password) {
			localStorage.setItem(AuthService.key, JSON.stringify({ username: this.username }))
		}
	}

	hasSession(): boolean {
		return localStorage.getItem(AuthService.key) !== undefined;
	}
}