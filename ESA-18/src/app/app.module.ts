import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage, TournamentsPage, TeamDetailPage, TeamsPage, GamePage, TeamHomePage, StandingsPage } from '../pages/pages';
import { EliteApiProvider } from '../providers/elite-api/elite-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage,
    GamePage,
    TeamHomePage,
    StandingsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage,
    GamePage,
    TeamHomePage,
    StandingsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApiProvider
  ]
})
export class AppModule {}
