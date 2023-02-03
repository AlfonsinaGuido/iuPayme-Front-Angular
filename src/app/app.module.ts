import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { CardsComponent } from './components/cards/cards.component';
import { BalanceComponent } from './components/balance/balance.component';
import { HistoryComponent } from './components/history/history.component';
import { ChartComponent } from './components/chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeUsuarioComponent,
    CardsComponent,
    BalanceComponent,
    HistoryComponent,
    ChartComponent,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
