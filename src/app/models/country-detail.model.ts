import { ILanguageDetail } from './language-detail.model';
import { ICurrencyDetail } from 'src/app/models/currency-detail.model';

export interface ICountryDetail {
    name: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    area: number;
    alpha3Code: string;
    languages: ILanguageDetail[];
    currencies: ICurrencyDetail[];
}