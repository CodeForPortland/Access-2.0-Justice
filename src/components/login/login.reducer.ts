import {Action} from "redux";

export interface ILoginComponentState {
  loggedIn: boolean;
  tokenKey: string;
}

export function loginReducer(state: ILoginComponentState, action: Action) {
  switch (action.type) {

  }
}