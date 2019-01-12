import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class UserSettingsProvider {

  constructor(public storage: Storage, public events: Events) {
  }

  favoriteTeam(team, tournamentId, tournamentName) {
    let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
    this.storage.set(team.id.toString(), JSON.stringify(item)).then(() => {
      this.events.publish('favorites:changed');
    });
  }

  unfavoriteTeam(team) {
    this.storage.remove(team.id.toString());
    this.events.publish('favorites:changed');
  }

  isFavoriteTeam(teamId) : Promise<boolean> {
    return this.storage.get(teamId.toString()).then(value => value ? true : false);
  }

  getAllFavorites() : Promise<any[]> {
    return new Promise(resolve => {
        let results = [];
        this.storage.forEach(data => {
            results.push(JSON.parse(data));
        });
        return resolve(results);
    });
  }
}
