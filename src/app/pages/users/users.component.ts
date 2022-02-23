import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import * as UserSvr from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: User[];
  constructor() { }

  ngOnInit(): void {
    this.users = UserSvr.getUtenti()
  }

}
