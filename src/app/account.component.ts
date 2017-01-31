import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';

import { Account } from './account';
import { AccountService } from './account.service';

@Component({
	templateUrl: 'account.component.html',
	selector: 'account'
})
export class AccountComponent implements OnInit {
	private account: Account;

	constructor(
		private location: Location,
		private route: ActivatedRoute,
		private accountService: AccountService) { }

	ngOnInit(): void {
		this.route.params
			.map(params => params['id'])
			.switchMap(id => id ? this.accountService.getById(id) : Observable.of(new Account()))
			.subscribe(account => this.account = account);
	}

	save(): void {
		let observable;
		if (this.account.id) {
			observable = this.accountService.update(this.account);
		} else {
			observable = this.accountService.create(this.account);
		}
		observable.subscribe(account => this.account = account);
	}

	goBack(): void {
		this.location.back();
	}
}