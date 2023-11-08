import { Component, OnInit } from '@angular/core';
import { Contacts, EmailType, PhoneType } from '@capacitor-community/contacts';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  contacts: any[] = [];
  qrCodeString = 'This is a secret qr code message';
  scannedResult: any;
  content_visibility = '';

  constructor() {}

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    try {
      const permission = await Contacts.requestPermissions();
      console.log('permission: ', permission.contacts);
      if (!permission?.contacts) return;
      else if (permission?.contacts == 'granted') {
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            phones: true,
            emails: true,
            image: true,
          },
        });
        console.log('result: ', result);
        this.contacts = result.contacts;
        console.log(this.contacts);
      }
    } catch (e) {
      console.log(e);
    }
  }

  joinNumbers(array: any) {
    return array.map((x: any) => x.number).join(' | ');
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
    return new_contact;
  }

  async check() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        // Permission already granted, you can proceed with scanning.
        console.log('Permission already granted');
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async startScan() {
    try {
      console.log('check');

      const permission = await this.check();
      // console.log(permission);

      if (!permission) {
        console.log(permission);
        alert('Permission not granted');
        return;
      }
      console.log('Some start');

      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add("scanner-active'");
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body')?.classList.remove('scanner-active');
      this.content_visibility = '';
      if (result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch (e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
    this.stopScan();
  }
}
