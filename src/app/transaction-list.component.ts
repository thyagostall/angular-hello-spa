import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

	constructor (
		private transactionService: TransactionService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.loadData();
	}

	loadData(): void {
		console.log("Load data");
		this.transactions = this.transactionService
								.get();
	}

	onSelect(transaction: Transaction) {
		this.router
			.navigate(['/transaction', transaction.id])
	}

	onDelete(transaction: Transaction) {
		this.transactionService
			.delete(transaction)
			.subscribe(b => this.loadData());
	}

	onAddNew() {
		this.router
		    .navigate(['/transaction'])	
	}
}