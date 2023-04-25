import { NgModule, LOCALE_ID, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/user/login/login.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitiesComponent } from './pages/common/cities/cities.component';
import { StatesComponent } from './pages/common/states/states.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { TollbarComponent } from './shared/tollbar/tollbar.component';
import { StateService } from './services/common/state.services';
import { CityService } from './services/common/city.services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonComponent } from './pages/common/common.component';
import { CompanyComponent } from './pages/company/company.component';
import { MatChipListComponent } from './shared/mat-chip-list/mat-chip-list.component';
import { CustomPaginator } from './shared/custom-configurations/CustomPaginatorConfiguration';
import { MatPaginatorIntl } from '@angular/material/paginator';
import localePt from '@angular/common/locales/pt';
import { BreadCrumbComponent } from './shared/bread-crumb/bread-crumb.component';
import { AccountsComponent } from './pages/common/accounts/accounts.component';
import { AccountService } from './services/company/account.services';
import { NewUserComponent } from './pages/user/new-user/new-user.component';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';
import { AuthenticationInterceptorService } from './services/authenticationInterceptor.service';
import { SecurityComponent } from './pages/identity/security.component';
import { WciClaimComponent } from './pages/identity/wci-claim/wci-claim.component';
import { ProfileComponent } from './pages/identity/profile/profile.component';
import { WciClaimService } from './services/identity/wci-claim.services';
import { DialogContentExampleDialog } from './pages/identity/wci-claim/dialog-content-example-dialog';
import { PlanetunComponent } from './pages/planetun/planetun.component';
import { InspectionComponent } from './pages/planetun/inspection/inspection.component';
import { InspectionService } from './services/planetun/inspection.services';
import { DialogContentInspectionDialog } from './pages/planetun/inspection/dialog-content-inspection-dialog';

registerLocaleData(localePt);

export function authInterceptorFactory(router: Router, injector: Injector) {
  return new AuthenticationInterceptorService(router,injector);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitiesComponent,
    StatesComponent,
    HomePageComponent,
    TollbarComponent,
    CommonComponent,
    CompanyComponent,
    MatChipListComponent,
    BreadCrumbComponent,  
    AccountsComponent, 
    NewUserComponent, 
    SecurityComponent, 
    WciClaimComponent, 
    ProfileComponent,
    DialogContentExampleDialog,
    PlanetunComponent,
    InspectionComponent,
    DialogContentInspectionDialog
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },    
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: authInterceptorFactory,
      multi: true,
      deps: [Router, Injector]
    },   
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    StateService,
    CityService,
    WciClaimService,
    AccountService,
    UserService,
    InspectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
