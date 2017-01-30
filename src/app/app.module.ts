import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionComponent } from './transaction.component';
import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { TransactionListComponent } from './transaction-list.component';
import { TransactionService } from './transaction.service';

@NgModule({
    declarations: [
        AppComponent,
        TransactionComponent,
        TransactionListComponent,
        AccountComponent,
        AccountListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        TransactionService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
