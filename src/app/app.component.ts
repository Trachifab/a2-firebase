import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  cuisines: FirebaseListObservable<any[]>;
  restaurant;

  constructor(private _angularFire: AngularFire){

  };

  ngOnInit() {
    this.cuisines = this._angularFire.database.list('/cuisines');
    this.restaurant = this._angularFire.database.object('/restaurant');
  };

  add()  {
    this.cuisines.push({
      name: 'Asian'
    });
  };

  update() {
    this._angularFire.database.object('/restaurant').update({
      name: 'New Name',
      rating: 5
    })
  }

}
