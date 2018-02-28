import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-kalkulatordilan',
  templateUrl: 'kalkulatordilan.html',
})
export class KalkulatordilanPage {

  name1 = '';
  name2 = '';

  get score()
  {
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for( let i = 0; i < letters.length; i++ )
    {
      sum += letters.charCodeAt(i);
    }
    return sum % 101;

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
