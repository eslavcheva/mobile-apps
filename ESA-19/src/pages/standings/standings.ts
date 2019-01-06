import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EliteApiProvider } from '../../providers/elite-api/elite-api';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  standings: any[];
  team: any = {};
  allStandings: any[];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eliteApi: EliteApiProvider) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.get('item');
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;
 
     this.allStandings = _.chain(this.standings)
        .groupBy('division')
        .toPairs()
        .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
        .value();
  }

}
