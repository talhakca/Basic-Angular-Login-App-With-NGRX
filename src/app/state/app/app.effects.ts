import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as AppActions from './app.actions';
import { map } from 'rxjs/operators'
import { ActivatedRoute, Router } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { REGISTERED_USERS } from "src/shared/registered-users";
import { Roles, UserService } from "src/shared";
import { EMPTY } from "rxjs";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private router: Router,
        private notificationService: NzNotificationService,
        private route: ActivatedRoute,
        private userService: UserService
    ) { }


    @Effect()
    initApp$ = this.actions$.pipe(
        ofType<AppActions.InitApp>(
            AppActions.ActionTypes.InitApp
        ),
        map((action) => {
            const user = this.userService.getUser();
            if (!user) {
                return new AppActions.Navigate({ url: 'login' });
            } else {
                this.store.dispatch(new AppActions.Navigate({ url: 'home-page' }));
            }
            return new AppActions.InitAppSuccessful();
        })
    );

    @Effect()
    navigate$ = this.actions$.pipe(
        ofType<AppActions.Navigate>(
            AppActions.ActionTypes.Navigate
        ),
        map((action) => {
            const user = this.userService.getUser();
            const url = action.payload.url;
            if (!user) {
                this.router.navigateByUrl('login')
                return new AppActions.NavigateSuccessful()
            } else {
                if (user.userType === Roles.Customer && url === 'user-list') {
                    return new AppActions.CreateNotification({ title: 'Navigation Denied', content: 'Restricted Page' });
                } else {
                    this.router.navigateByUrl(url);
                    return new AppActions.NavigateSuccessful()
                }
            }
        })
    );

    @Effect()
    createNotification$ = this.actions$.pipe(
        ofType<AppActions.CreateNotification>(
            AppActions.ActionTypes.CreateNotification
        ),
        map((action) => {
            const title = action.payload.title;
            const content = action.payload.content;
            this.notificationService.blank(title, content, { nzPlacement: 'bottomRight' });
            return new AppActions.CreateNotificationSuccessful();
        })
    );

    @Effect()
    login$ = this.actions$.pipe(
        ofType<AppActions.Login>(
            AppActions.ActionTypes.Login
        ),
        map((action) => {
            const loginCredentials = action.payload;
            const user = REGISTERED_USERS.find(user => user.email === loginCredentials.email && user.password === loginCredentials.password);
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                /* normally i think it would be better if we listen loginSuccessful by ofType then navigate */
                this.router.navigateByUrl('home-page');
                return new AppActions.LoginSuccessful();
            } else {
                return new AppActions.CreateNotification(
                    { title: 'Login Failed', content: 'We could not log you in right now. Please check your credentials' }
                );
            }
        })
    );
}