import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {}
  // Necessary for close modal on click
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
