import { Component, OnInit } from '@angular/core';
import { ICountryDetail } from 'src/app/models/country-detail.model';
import { CountriesService } from 'src/app/services/countries.service';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { ILanguageDetail } from '../../models/language-detail.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  countryList: ICountryDetail[] = [];
  selectedLanguageDetails: ILanguageDetail[] = [];
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
    let alpha3Code = this.countryListForm.get('ddlCountry').value;
    this._countriesService.getCountryDetails(alpha3Code).subscribe(data => {
      this.selectedLanguageDetails = data.languages;
    });
  }

}
