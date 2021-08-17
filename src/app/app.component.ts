import { Component, VERSION } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayColumns = [
    { name: 'Email', value: 'email' },
    { name: 'First Name', value: 'first_name' },
    { name: 'Gender', value: 'gender' },
    { name: 'S.No', value: 'email' },
    { name: 'Last Name', value: 'last_name' }
  ];
  userInfoList = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani ',
      last_name: 'Frediani ',
      email: 'gfrediani1@senate.gov ',
      gender: 'Male '
    },
    {
      id: 3,
      first_name: 'Noell ',
      last_name: 'Bea ',
      email: 'nbea2@imageshack.us ',
      gender: 'Female '
    },
    {
      id: 4,
      first_name: 'Willard ',
      last_name: 'Valek ',
      email: 'wvalek3@vk.com ',
      gender: 'Male '
    }
  ];
  name = 'Angular ' + VERSION.major;
}
