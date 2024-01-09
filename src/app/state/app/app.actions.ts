import { Action } from "@ngrx/store";

export enum ActionTypes {
    InitApp = 'InitApp',
    InitAppSuccessful = 'InitAppSuccessful',
    CreateNotification = 'CreateNotification',
    CreateNotificationSuccessful = 'CreateNotificationSuccessful',
    Login = 'Login',
    LoginSuccessful = 'LoginSuccessful',
    Navigate = 'Navigate',
    NavigateSuccessful = 'NavigateSuccessful'
}

export class InitApp implements Action {
    readonly type = ActionTypes.InitApp;
}

export class InitAppSuccessful implements Action {
    readonly type = ActionTypes.InitAppSuccessful;
}

export class CreateNotification implements Action {
    readonly type = ActionTypes.CreateNotification;
    constructor(public payload: { title: string, content: string }) { }
}

export class CreateNotificationSuccessful implements Action {
    readonly type = ActionTypes.CreateNotificationSuccessful;
}

export class LoginSuccessful implements Action {
    readonly type = ActionTypes.LoginSuccessful;
}

export class Login implements Action {
    readonly type = ActionTypes.Login;
    constructor(public payload: { email: string, password: string }) { }
}

export class Navigate implements Action {
    readonly type = ActionTypes.Navigate;
    constructor(public payload: { url: string }) { }
}

export class NavigateSuccessful implements Action {
    readonly type = ActionTypes.NavigateSuccessful;
}

export type Actions = InitApp
    | InitAppSuccessful
    | CreateNotification
    | CreateNotificationSuccessful
    | Login
    | LoginSuccessful
    | Navigate
    | NavigateSuccessful;