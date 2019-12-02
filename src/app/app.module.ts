import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { InvestmentComponent } from './investment/investment.component';
import { OtherFinancialComponent } from './other-financial/other-financial.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DetailsContainerComponent, InvestmentComponent, OtherFinancialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
