import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

export class TransactionService {
	post(transaction: Transaction): Observable<void> {
		return null;
	}
}