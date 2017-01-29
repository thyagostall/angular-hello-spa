import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Transaction } from './transaction'
import { TransactionService } from './transaction.service';

@Component({
	moduleId: module.id,
	selector: 'transaction',
	templateUrl: 'transaction.component.html'
})
export class TransactionComponent {
	transaction = new Transaction()

	constructor(
		private transactionService: TransactionService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.transactionService.getById(+params['id']))
			.subscribe(transaction => {
				if (transaction) {
					this.transaction = transaction
				}
			});
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