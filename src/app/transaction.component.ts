import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Transaction } from './transaction'
import { TransactionService } from './transaction.service';

import { Observable } from 'rxjs';

@Component({
	moduleId: module.id,
	selector: 'transaction',
	templateUrl: 'transaction.component.html'
})
export class TransactionComponent implements OnInit {
	transaction: Transaction;

	constructor(
		private transactionService: TransactionService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params
			.map(params => params['id'])
			.switchMap(id => id ? this.transactionService.getById(id) : Observable.of(new Transaction()))
			.subscribe(transaction => this.transaction = transaction);
	}

	save(): void {
		let observable;
		if (this.transaction.id) {
			observable = this.transactionService
							 .update(this.transaction);
		} else {
			observable = this.transactionService
							 .create(this.transaction);
		}

		observable.subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}
}