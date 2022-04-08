import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreensizeService {
  private isDesktop = new BehaviorSubject(false);
  constructor() { }
  onResize(size: number) {
    // If you need decomment this line console.log('size: ', size);
    // Choose size of your choice , here Ipad is considerate as mobile
    if(size < 1257){
      this.isDesktop.next(false);
    }else{
      this.isDesktop.next(true);
    }
  }
  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
