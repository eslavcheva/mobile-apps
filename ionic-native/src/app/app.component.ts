import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VibrationPage } from '../pages/vibration/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { CameraPage } from '../pages/camera/camera';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Vibration', component: VibrationPage, icon: 'pulse'},
      { title: 'Geolocation', component: GeolocationPage, icon: 'locate'},
      { title: 'Camera', component: CameraPage, icon: 'camera'},
      { title: 'Barcode Scanner', component: BarcodeScannerPage, icon: 'barcode'},
      { title: 'Device Motion', component: DeviceMotionPage, icon: 'move'},
      { title: 'Local Notifications', component: LocalNotificationsPage, icon: 'notifications'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
