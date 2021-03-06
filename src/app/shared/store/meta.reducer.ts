import authorReducer, * as fromAuthor from '../../author/store/author.reducers';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

export interface AppState {
  authors: fromAuthor.AuthorState;
}

export const reducers: ActionReducerMap<AppState> = {
  authors: authorReducer
};

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

