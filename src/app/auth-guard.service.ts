import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private authService: AuthService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.authService.hasSession()) {
			return true;
		}

		this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
		return false;
	}
}