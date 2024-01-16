import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumEvensOddsComponent } from './Execises/sum-evens-odds/sum-evens-odds.component';
import { ReversedValueComponent } from './Execises/reversed-value/reversed-value.component';
import { CenteredArrayComponent } from './Execises/centered-array/centered-array.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SumEvensOddsComponent,
    ReversedValueComponent,
    CenteredArrayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
