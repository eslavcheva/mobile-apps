import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DeviceMotion } from '@ionic-native/device-motion';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VibrationPage } from '../pages/vibration/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { CameraPage } from '../pages/camera/camera';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodeScannerPage,
    DeviceMotionPage,
    LocalNotificationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodeScannerPage,
    DeviceMotionPage,
    LocalNotificationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    Geolocation,
    Camera,
    BarcodeScanner,
    DeviceMotion,
    LocalNotifications
  ]
})
export class AppModule {}
