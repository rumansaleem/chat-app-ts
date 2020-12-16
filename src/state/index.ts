import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as fromPeople from './people/people.reducer';
import * as fromChats from './chats/chats.reducer';

const reducer = combineReducers({
  [fromPeople.peopleReducerKey]: fromPeople.reducer,
  [fromChats.chatsReducerKey]: fromChats.reducer,
});

export type AppState = ReturnType<typeof reducer>;

const store = createStore(reducer, composeWithDevTools());

export default store;
