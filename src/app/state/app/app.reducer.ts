import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export const initialState = {};

export interface AppState {

}

export function reducer(
    state: AppState = initialState,
    action: AppActions.Actions
): AppState {
    switch (action.type) {
        default:
            return state;
    }
}
