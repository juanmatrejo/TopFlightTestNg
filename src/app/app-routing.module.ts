import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReversedValueComponent } from './Execises/reversed-value/reversed-value.component';
import { SumEvensOddsComponent } from './Execises/sum-evens-odds/sum-evens-odds.component';
import { CenteredArrayComponent } from './Execises/centered-array/centered-array.component';

const routes: Routes = [
	{ path: 'centeredarray', component: CenteredArrayComponent },
	{ path: 'reversedvalue', component: ReversedValueComponent },
	{ path: 'sumevensodds', component: SumEvensOddsComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'centeredarray' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
