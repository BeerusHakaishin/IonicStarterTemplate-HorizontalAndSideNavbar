import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  // Options for ion-slider
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }
  ngOnInit() {}
}
