import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { AssetSearchPage } from '../pages/assetSearch/assetSearch';
import { AssetSearchFilterPage } from '../pages/assetSearch-filter/assetSearch-filter';
import { AssetDetailPage } from '../pages/asset-detail/asset-detail';
import { SignupPage } from '../pages/signup/signup';
import { MilitaryBaseDetailPage } from '../pages/militaryBase-detail/militaryBase-detail';
import { MilitaryBaseListPage } from '../pages/militaryBase-list/militaryBase-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    AssetSearchPage,
    AssetSearchFilterPage,
    AssetDetailPage,
    SignupPage,
    MilitaryBaseDetailPage,
    MilitaryBaseListPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'Tabs', segment: 'tabs' },
        { component: AssetSearchPage, name: 'AssetSearch', segment: 'assetSearch' },
        { component: AssetDetailPage, name: 'AssetDetail', segment: 'assetDetail/:name' },
        { component: AssetSearchFilterPage, name: 'AssetSearchFilter', segment: 'assetSearchFilter' },
        { component: MilitaryBaseListPage, name: 'MilitaryBaseList', segment: 'militaryBaseList' },
        { component: MilitaryBaseDetailPage, name: 'MilitaryBaseDetail', segment: 'militaryBaseDetail/:name' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    AssetSearchPage,
    AssetSearchFilterPage,
    AssetDetailPage,
    SignupPage,
    MilitaryBaseDetailPage,
    MilitaryBaseListPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
