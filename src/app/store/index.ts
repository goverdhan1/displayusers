import {Subject} from 'rxjs';
import {ActionTypes} from './actions';

interface InitialState {
  users: Array<any>;
}

interface Event {
  type: String;
  payload?: Object;
}

let state: InitialState = {
  users: [],
};

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_USERS:
      store.next(state);
      break;
    case ActionTypes.CREATE_USERS:
      state = {
        users: [...state.users, data.payload],
      };
      store.next(state);
      break;
      default:
      break;
  }
});
