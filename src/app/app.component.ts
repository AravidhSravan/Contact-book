import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact-Book';
  name: any;
  email: any;
  phno: any;
  uploadimg: any;
  baseUrl: any;
  isDialogOpen: boolean = false;
  contacts: any = [
    {
      name: 'Aravindh',
      email: 'aravindhsravan@gmail.com',
      phoneNumber: '9698903413',
    },
    {
      name: 'Karthi',
      email: 'karthi.p1312@gmail.com',
      phoneNumber: '8270714121',
    },
    {
      name: 'Prabu',
      email: 'Prabuvel@gmail.com',
      phoneNumber: '8870253933',
    }
  ]
  addContacts() {
    let x: any =
    {
      name: this.name,
      email: this.email,
      phoneNumber: this.phno,
      baseUrl: this.baseUrl,
    };
    this.contacts.push(x);
    console.log(this.contacts);
    this.isDialogOpen=false;
    this.name=null;
    this.email=null;
    this.phno=null;
    this.baseUrl=null;
  }
  addContact() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
    }
    else {
      this.isDialogOpen = false;
    }
  }
}
