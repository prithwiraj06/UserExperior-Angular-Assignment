import { Component, OnInit } from '@angular/core';
import { ICountryDetail } from 'src/app/models/country-detail.model';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { ICurrencyDetail } from '../../models/currency-detail.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  countryList: ICountryDetail[] = [];
  selectedCurrencyDetails: ICurrencyDetail[] = [];
  countryListForm: FormGroup;
  constructor(private _countriesService: CountriesService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.countryListForm = this._formBuilder.group({
      ddlCountry: []
    });

    this._countriesService.getCountryList().subscribe((data: ICountryDetail[]) => {
      this.countryList = data;
    });
  }

  onCountryChange() {
    console.log(this.countryListForm.get('ddlCountry').value);
    let alpha3Code = this.countryListForm.get('ddlCountry').value;
    this._countriesService.getCountryDetails(alpha3Code).subscribe(data => {
      this.selectedCurrencyDetails = data.currencies;
    });
  }

}
