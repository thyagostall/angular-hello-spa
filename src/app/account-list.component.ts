import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Account } from './account';
import { AccountService } from './account.service';

@Component({
	templateUrl: 'account-list.component.html',
	selector: 'account-list'
})
export class AccountListComponent implements OnInit {
	private data: Account[];

	constructor(
		private router: Router,
		private accountService: AccountService) {

	}

	ngOnInit() {
		this.accountService
			.get()
			.subscribe(data => this.data = data);
	}

	onAddNew(): void {
		this.router
		    .navigate(['/account']);
	}

	onSelect(account: Account): void {
		this.router
		    .navigate(['/account', account.id]);
	}

	onDelete(account: Account): void {

	}
}