import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { Contacts, EmailType, PhoneType } from '@capacitor-community/contacts';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  contact: any;
  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // this.message = this.data.getMessageById(parseInt(id, 10));
    this.getContact(id);
  }
  async getContact(contactId: any) {
    const new_contact = await Contacts.getContact({
      contactId: contactId,
      projection: {
        name: true,
        phones: true,
        emails: true,
        image: true,
      },
    });
    // this.contact = new_contact;
    this.contact = new_contact;
    return new_contact;
  }
  joinNumbers(array: any) {
    return array.map((x: any) => x.number).join(' | ');
  }
  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Back' : '';
  }
}
