import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html',
})
export class LocalNotificationsPage {
  results: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public localNotifications: LocalNotifications, public alertCtrl: AlertController) {
    this.localNotifications.on('click').subscribe( notification => {
        this.results = notification.data.name;
        let alert = alertCtrl.create({
          title: notification.title,
          subTitle: notification.data.name,
          buttons: ['OK']

        });
        alert.present();
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationsPage');
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Cool Notification',
      text: 'This is my cool notification!',
      data: {
        id: 21,
        name: 'Cool Notification #1'
      }
    });
  }

}
