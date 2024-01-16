import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReversedValueComponent } from './Execises/reversed-value/reversed-value.component';
import { SumEvensOddsComponent } from './Execises/sum-evens-odds/sum-evens-odds.component';
import { CenteredArrayComponent } from './Execises/centered-array/centered-array.component';
import { From0to20Component } from './Execises/from0to20/from0to20.component';

const routes: Routes = [
	{ path: 'centeredarray', component: CenteredArrayComponent },
	{ path: 'reversedvalue', component: ReversedValueComponent },
	{ path: 'sumevensodds', component: SumEvensOddsComponent },
	{ path: 'from0to20', component: From0to20Component },
	{ path: '**', pathMatch: 'full', redirectTo: 'centeredarray' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
