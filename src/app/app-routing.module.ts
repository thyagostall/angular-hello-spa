import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/transactions',
		pathMatch: 'full'
	},
	{
		path: 'transaction/:id',
		component: TransactionComponent
	},
	{
		path: 'transaction',
		component: TransactionComponent
	},	
	{
		path: 'transactions',
		component: TransactionListComponent
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}