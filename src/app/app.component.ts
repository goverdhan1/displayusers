import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {User} from './user.model';
import {eventDispatcher} from './store';
import {ActionTypes} from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe((data:Array<User>) => {
      eventDispatcher.next({type: ActionTypes.CREATE_USERS, payload: data});
    });
  }
}
