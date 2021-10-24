import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListingComponent } from './user-listing/user-listing.component';

import * as fromAppState from './state/app/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import * as fromAppStateEffects from './state/app/app.effects';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { HomePageComponent } from './home-page/home-page.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UserInputComponent } from './user-input/user-input.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';

const icons: IconDefinition[] = [UserOutline, LockOutline];
registerLocaleData(en);

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-list',
    component: UserListingComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListingComponent,
    HomePageComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(
      fromAppState.reducer
    ),
    EffectsModule.forRoot([fromAppStateEffects.AppEffects]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule.forRoot(icons),
    NzDividerModule,
    NzNotificationServiceModule,
    NzTableModule,
    NzSelectModule,
    NzModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
