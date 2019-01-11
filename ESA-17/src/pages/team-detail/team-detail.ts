import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  team: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.get('team');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

  goHome() {
    this.navCtrl.parent.parent.popToRoot();
  }
}
