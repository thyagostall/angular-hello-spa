import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Account } from './account';

@Component({
	templateUrl: 'account.component.html',
	selector: 'account'
})
export class AccountComponent {
	account = new Account();

	constructor(private location: Location) {

	}

	save(): void {
		console.log("save");
	}

	goBack(): void {
		this.location.back();
	}
}