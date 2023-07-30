import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from './top-bar/top-bar.module';
import { DashboardContainerModule } from './dashboard-container/dashboard-container.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { WalletCardComponent } from './wallet-card/wallet-card.component';
import { BottomNavBarModule } from './bottom-nav-bar/bottom-nav-bar/bottom-nav-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WalletCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopBarModule,  
    BottomNavBarModule,
    DashboardContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
