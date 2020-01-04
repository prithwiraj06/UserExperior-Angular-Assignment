import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { ICountryDetail } from 'src/app/models/country-detail.model';
@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    constructor(private _httpClient: HttpClient) {

    }

    getCountryList(): Observable<ICountryDetail[]> {
        return this._httpClient.get<ICountryDetail[]>('https://restcountries.eu/rest/v2/all');
    }

    getCountryDetails(alpha3Code: string): Observable<ICountryDetail> {
        return this._httpClient.get<ICountryDetail>(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);
    }
}