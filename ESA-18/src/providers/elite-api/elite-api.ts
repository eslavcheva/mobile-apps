import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class EliteApiProvider {
  private baseUrl = 'https://elite-schedule-app-ff69c.firebaseio.com';
  currentTourney: any = {};

  constructor(public http: HttpClient) {
    console.log('Hello EliteApiProvider Provider');
  }

  getTournaments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tournaments.json`)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getTournamentData(tourneyId) : Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
        .map(response => {
            this.currentTourney = response;
            return this.currentTourney;
    });
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err);
  }

  getCurrentTourney(){
    return this.currentTourney;
  }

}
