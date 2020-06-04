import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromGln from './gln.reducer';
import * as fromGlnList from './gln-list.reducer';

// =========== core reducer ================= //
export interface State {
  gln: fromGln.State;
  glnList: fromGlnList.State;
}

export const reducer: ActionReducerMap<State> = {
  gln: fromGln.reducer,
  glnList: fromGlnList.reducer
};
export const getBusinessState =  createFeatureSelector<State>('business');
// =========== end core ===================== //


// =========== GLN ========================== //
export const getGlnState =  createSelector(
  getBusinessState,
  state => state.gln
);

export const {
  selectIds: getGlnListIds,
  selectEntities: getGlnListEntities,
  selectAll: getGlnListAll,
  selectTotal: getTotalGlnList,
} = fromGln.adapter.getSelectors(getGlnState);

export const getGlnListPage = createSelector(
  getBusinessState,
  state => state.glnList
);

export const getGlnListPageLoading = createSelector(
  getGlnListPage,
  fromGlnList.getLoading
);

export const getGlnListPageTotal = createSelector(
  getGlnListPage,
  fromGlnList.getTotal
);

export const getGlnListPageIds = createSelector(
  getGlnListPage,
  fromGlnList.getIds
);

export const getGlnPageResults =  createSelector(
  getGlnListEntities,
  getGlnListPageIds,
  (custom, ids) => {
    return ids.map(id => custom[id]);
  }
);

// =========== end GLN ========================== //
