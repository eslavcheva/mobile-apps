import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

  vibrate() {
    console.log('vibrate');
    this.vibration.vibrate(1000);
  }

  vibratePattern() {
    this.vibration.vibrate([2000, 1000, 500]);
  }

}
