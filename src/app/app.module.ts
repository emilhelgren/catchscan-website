import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConstructionComponent } from './construction/construction.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandIntroComponent } from './land-intro/land-intro.component';
import { LandTechComponent } from './land-tech/land-tech.component';
import { LandLegalComponent } from './land-legal/land-legal.component';
import { TechnicalComponent } from './technical/technical.component';
import { LegalComponent } from './legal/legal.component';
import { SubTechnicalComponent } from './sub-technical/sub-technical.component';
import { SubLegalComponent } from './sub-legal/sub-legal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ConstructionComponent,
    RegistrationComponent,
    FooterComponent,
    LandingPageComponent,
    LandIntroComponent,
    LandTechComponent,
    LandLegalComponent,
    TechnicalComponent,
    LegalComponent,
    SubTechnicalComponent,
    SubLegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
