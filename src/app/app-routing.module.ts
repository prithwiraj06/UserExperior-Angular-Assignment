import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { 
        path: 'language-list', 
        loadChildren: () => import('./language-list/language-list.module').then(m => m.LanguageListModule)
    },
    { path: 'currency-list', loadChildren: () => import('./currency-list/currency-list.module').then(m => m.CurrencyListModule) }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}