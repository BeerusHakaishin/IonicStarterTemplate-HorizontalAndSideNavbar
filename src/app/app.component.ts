import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Below my variables for show footer only on certain components :
  isFooterDisplayed = 'show-footer';
  // Here my string array for regroup the components who they doesn't needs display footer , juste add component of your choice
  componentDoesntNeedFooter: string[] = ['TutorialComponent'];
  constructor() {}
  componentAdded(e){
    // If you need decomment this line console.log(e.constructor.name);
    this.isFooterDisplayed = this.componentDoesntNeedFooter.includes(e.constructor.name) ? 'hide-footer' : 'show-footer';
  }
}
