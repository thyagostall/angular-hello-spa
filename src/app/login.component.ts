import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	templateUrl: 'login.component.html',
	selector: 'login'
})
export class LoginComponent {
	model: any = {};
	returnUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService) {}

	ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login() {
		let username = this.model.username;
		let password = this.model.password;
		
		this.authService
			.login(username, password)
			.subscribe(result => this.router.navigate([this.returnUrl]));
	}
}