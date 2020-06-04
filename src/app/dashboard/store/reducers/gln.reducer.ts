import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {GlnActions} from '../actions';
import {GlnModel} from '../../models';

export interface State extends EntityState<GlnModel> {
}

export const adapter: EntityAdapter<GlnModel> = createEntityAdapter<GlnModel>({
  selectId: gln => gln.id,
  sortComparer: false
});

export const inititalState: State = adapter.getInitialState({});

export function reducer(
  state = inititalState,
  action: GlnActions.GlnActionsUnion
): State {
  switch (action.type) {
    case GlnActions.loadGlnSuccess.type:
      return adapter.upsertMany(action.gln, state);
    case GlnActions.updateGlnSuccess.type:
      return adapter.updateOne({id: action.id, changes: action.gln}, state);
    default:
      return state;
  }
}

