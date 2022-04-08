import { Component, HostListener } from '@angular/core';
import { ScreensizeService } from './services/screensize.service';

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
  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.onResize(window.innerWidth);
  }
  // Necessary for detect screensize change events
  @HostListener('window:resize' , ['$event'])
  private onResize(event){
    this.screensizeService.onResize(event.target.innerWidth);
  }
  // Below method for hide footer only if componentDoesntNeedFooter array contains the components name , else show footer
  componentAdded(e){
    // If you need decomment this line console.log(e.constructor.name);
    this.isFooterDisplayed = this.componentDoesntNeedFooter.includes(e.constructor.name) ? 'hide-footer' : 'show-footer';
  }
}
