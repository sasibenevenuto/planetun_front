import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './pages/common/cities/cities.component';
import { CommonComponent } from './pages/common/common.component';
import { StatesComponent } from './pages/common/states/states.component';
import { AccountsComponent } from './pages/common/accounts/accounts.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LoginComponent } from './pages/user/login/login.component';
import { NewUserComponent } from './pages/user/new-user/new-user.component';
import { SecurityComponent } from './pages/identity/security.component';
import { WciClaimComponent } from './pages/identity/wci-claim/wci-claim.component';
import { ProfileComponent } from './pages/identity/profile/profile.component';
import { PlanetunComponent } from './pages/planetun/planetun.component';
import { InspectionComponent } from './pages/planetun/inspection/inspection.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'common', component: CommonComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'states', component: StatesComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'wciClaim', component: WciClaimComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'planetun', component: PlanetunComponent },
  { path: 'inspection', component: InspectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
