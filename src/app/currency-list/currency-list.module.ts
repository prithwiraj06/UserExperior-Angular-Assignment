import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyListRoutingModule } from './currency-list-routing.module';
import { CurrencyComponent } from 'src/app/currency-list/currency/currency.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CurrencyListRoutingModule
  ]
})
export class CurrencyListModule { }
