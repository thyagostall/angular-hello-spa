import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list.component';
import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { LoginComponent } from './login.component';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/transactions',
		pathMatch: 'full'
	},
	{
		path: 'transaction/:id',
		component: TransactionComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'transaction',
		component: TransactionComponent,
		canActivate: [AuthGuard]
	},	
	{
		path: 'transactions',
		component: TransactionListComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'account',
		component: AccountComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'account/:id',
		component: AccountComponent,
		canActivate: [AuthGuard]
	},	
	{
		path: 'accounts',
		component: AccountListComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}