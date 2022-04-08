import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // Variable used for detect ScreenChanges
  isDesktop: boolean;
  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      // If you need decomment this line console.log('isDesktop changed:', isDesktop);
      if(this.isDesktop && !this.isDesktop){
        window.location.reload();
        // Reload is necessary for smooth transitions
      }
      this.isDesktop = isDesktop;
    });
   }
  ngOnInit() {}
}
