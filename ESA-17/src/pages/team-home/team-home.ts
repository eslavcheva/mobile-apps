import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage, StandingsPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  teamDetailTab: any;
  standingsTab: any;
  team: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teamDetailTab = TeamDetailPage;
    this.standingsTab = StandingsPage;
    this.team = this.navParams.get('team');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
