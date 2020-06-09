import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {eventDispatcher, store} from '../store';
import {ActionTypes} from '../store/actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User>
  constructor() {
    store.subscribe((state) => {
      const {users} = state;
      this.users = users;
    });
   }
  ngOnInit() {
      eventDispatcher.next({type: ActionTypes.GET_USERS});
  }
}
