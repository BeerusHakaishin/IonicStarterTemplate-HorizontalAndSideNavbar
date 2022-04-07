import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDesktop: boolean;
  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      // If you need decomment this line console.log('isDesktop changed:', isDesktop);
      if(this.isDesktop && !this.isDesktop){
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
   }
  ngOnInit() {}
// Necessary methods for settings up dark theme below
// Encounters problems with navigation on iOS smartphone nothin on Android it's all good,need to be improved for iPhone
// Disabled when using an angular routerLink only, kept when using an ion-backButton , to be tested with the ion-router !
  onClick(event: any){
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }
   colorTest(systemInitiatedDark: any) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
}
