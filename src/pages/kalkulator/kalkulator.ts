import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-kalkulator',
  templateUrl: 'kalkulator.html',
})
export class KalkulatorPage {
  @ViewChild('f') tipForm: NgForm;
  amount: number;
  tipAmount: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  percnetage(input:number){
    this.tipAmount = (this.amount*input)/100;
  }

  clear(){
    this.tipForm.reset();
    this.tipAmount = 0;
  }

}
