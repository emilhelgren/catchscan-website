import { TechnicalComponent } from './technical/technical.component';
import { LegalComponent } from './legal/legal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'technical', component: TechnicalComponent},
  { path: 'legal', component: LegalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
