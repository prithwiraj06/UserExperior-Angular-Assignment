import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageListRoutingModule } from './language-list-routing.module';
import { LanguageComponent } from './language/language.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';


@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LanguageListRoutingModule
  ]
})
export class LanguageListModule { }
