import { Component, OnInit } from '@angular/core';
import { Contacts, ContactPayload } from '@capacitor-community/contacts';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  contacts: ContactPayload[] = [];
  constructor() {}
  ngOnInit(): void {
    this.loadContacts();
  }

  async loadContacts() {
    // if (isPlatform('android')) {
    //   let permission = await Contacts.getPermissions();
    //   if (!permission.granted) {
    //     return;
    //   }
    // }

    Contacts.getContacts().then((contacts) => {
      console.log(contacts);
    });
    // Contacts.getContacts().then((result) => {
    //   console.log(result);
    //   this.contacts = result.contacts;
    // });
  }
}
