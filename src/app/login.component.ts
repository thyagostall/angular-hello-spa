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
	loginError = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService) {}

	ngOnInit() {
		this.authService.logout();

		this.returnUrl = this.route.snapshot.queryParams['url'] || '/';
	}

	login() {
		let username = this.model.username;
		let password = this.model.password;
		
		this.authService
			.login(username, password)
			.subscribe(result => {
				this.loginError = !result;
				this.router.navigate([this.returnUrl])
			});
	}
}