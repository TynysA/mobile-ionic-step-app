import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer,
  ) {


    const icons = [
      {name: 'search', url: '../assets/icons/mybpm-search.svg'},
      {name: 'vert-dots', url: '../assets/icons/no-color-vert-dots.svg'},
      {name: 'add', url: '../assets/icons/no-color-add.svg'},
      {name: 'close', url: '../assets/icons/no-color-x.svg'},
      {name: 'close-chip', url: '../assets/icons/chip-close.svg'},
      {name: 'delete-basket', url: '../assets/icons/no-color-delete.svg'},
      {name: 'sort-show', url: '../assets/icons/no-color-order-desc.svg'},
      {name: 'download', url: '../assets/icons/no-color-download.svg'},
      {name: 'warning', url: '../assets/icons/no-color-war.svg'},
      {name: 'trash', url: '../assets/icons/trash-red.svg'},
      {name: 'archive', url: '../assets/icons/archive.svg'},
      {name: 'plus-green', url: '../assets/icons/plus-green.svg'},
      {name: 'arrow', url: '../assets/icons/arrow.svg'},
      {name: 'house', url: '../assets/icons/house.svg'},
      {name: 'user', url: '../assets/icons/user.svg'}
    ];
    icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url));
    });

  }
}
