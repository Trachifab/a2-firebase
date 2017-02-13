import { Component } from '@angular/core';
import {AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cuisines;

  constructor(_angularFire: AngularFire){
    _angularFire.database.list('/cuisines')
      .subscribe(retrievedCuisines => {
        this.cuisines = retrievedCuisines;
      });
  };
}
