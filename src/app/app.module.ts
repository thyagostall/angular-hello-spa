import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list.component';
import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { LoginComponent } from './login.component';

import { TransactionService } from './transaction.service';
import { AccountService } from './account.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [
        AppComponent,
        TransactionComponent,
        TransactionListComponent,
        AccountComponent,
        AccountListComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        TransactionService,
        AccountService,
        AuthGuard,
        AuthService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
