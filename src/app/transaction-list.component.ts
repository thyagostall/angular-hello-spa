import { Component } from '@angular/core';

import { TransactionService } from './transaction.service';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Component({
	moduleId: module.id,
	selector: 'transaction-list',
	templateUrl: 'transaction-list.component.html'
})
export class TransactionListComponent {
	private transactions = new Observable<Transaction[]>();

	constructor (private transactionService: TransactionService) {}

	ngOnInit(): void {
		this.transactions = this.transactionService.get();
	}
}