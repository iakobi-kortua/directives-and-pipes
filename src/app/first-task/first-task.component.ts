import { Component, OnInit } from '@angular/core';
import data from '../data.json';

export interface User {
  firstName: string;
  lastName: string;
  about: string;
  birthDate: string;
  status: string;
}

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.scss'],
})
export class FirstTaskComponent implements OnInit {
  us: string[] = ['giorgi', 'saba', 'giorgi'];
  allUsers = data.Users;
  users: User[] = [];
  showUser: boolean = false;
  showLoad: boolean = false;

  constructor() {
    this.allUsers.forEach((user) => {
      return this.users.push({
        firstName: user.firstName,
        lastName: user.lastName,
        about: user.about,
        birthDate: user.birthDate,
        status: user.status,
      });
    });
  }

  loadUsers() {
    this.showLoad = true;
    setTimeout(() => {
      this.showLoad = false;
      this.showUser = true;
    }, 2000);
  }

  getClass(value: string) {
    if (value == 'Active') {
      return 'green';
    } else if (value == 'Deleted') {
      return 'red';
    } else {
      return 'blue';
    }
  }

  ngOnInit(): void {}
}
