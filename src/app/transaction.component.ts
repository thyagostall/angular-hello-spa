import { Component } from '@angular/core';

import { Transaction } from './transaction'

@Component({
	moduleId: module.id,
	selector: 'transaction',
	templateUrl: 'transaction.component.html'
})
export class TransactionComponent {
	transaction = new Transaction()

	save(): void {
		console.log(this.transaction);
	}
}