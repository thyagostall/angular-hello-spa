import { Component } from '@angular/core';

import { Transaction } from './transaction'
import { TransactionService } from './transaction.service';

@Component({
	moduleId: module.id,
	selector: 'transaction',
	templateUrl: 'transaction.component.html'
})
export class TransactionComponent {
	transaction = new Transaction()

	constructor(private transactionService: TransactionService) { }

	save(): void {
		this.transactionService
			.create(this.transaction)
			.subscribe(result => console.log(result.id));
	}
}