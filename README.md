# IonicStarterTemplate-HorizontalAndSideNavbar

___Simple starter pour utiliser pleinement Ionic avec une navigation horizontal navbar avec burger btn plus adaptée pour Desktop qui déploie une sidenav qui as tellement d'élegance___ 


In case, if someone like me, encounters problems during the screenSize with as error in console in the browser: 'Menu: must have a "content" element to listen for drag events on.'
As a result, the sidenav and the burger button did not appear.
- Go to : node_modules\@ionic\core\dist\esm\ion-menu_3.entry.js
- Comment the line 103:
```sh
if (typeof customElements !== 'undefined') {
     await customElements.whenDefined('ion-menu');
     }
 ```
-> Problem solved, it works fine !
