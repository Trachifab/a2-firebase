import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFire, FirebaseListObservable } from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;

  constructor(private _angularFire: AngularFire){

  };

  ngOnInit() {
    this.cuisines = this._angularFire.database.list('/cuisines');
    this.restaurants = this._angularFire.database.list('/restaurants')
      .map(restaurants => {
        console.log('BEFORE MAP', restaurants);
        restaurants.map(restaurant => {
          restaurant.cuisineType = this._angularFire.database.object('/cuisines/' + restaurant.cuisine);
        });
        console.log("AFTER MAP", restaurants);
        return restaurants
      });
  };

}
