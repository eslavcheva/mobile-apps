import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentsPage, TeamHomePage } from '../pages';
import { EliteApiProvider } from '../../providers/elite-api/elite-api';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {
  favorites = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController, 
    public eliteApi: EliteApiProvider,
    public userSettings: UserSettingsProvider
    ) {
  }

  ionViewDidLoad() {
    this.userSettings.getAllFavorites().then(favs => this.favorites = favs);
  }

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
        content: 'Getting data...'
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => {
            loader.dismiss();
            this.navCtrl.push(TeamHomePage, {team: favorite.team});
        });
}

}
