import {GlnActions} from '../actions';
export interface State {
  loading: boolean;
  ids: any[];
  total: number;
}

export const initState: State = {
  loading: false,
  ids: [],
  total: 0,
};

export function reducer(
  state =  initState,
  action:
    | GlnActions.GlnActionsUnion
): State {
  switch (action.type) {
    case GlnActions.loadGln.type:
      return {
        ...state,
        loading: true
      };
    case GlnActions.loadGlnSuccess.type:
      return {
        ... state,
        loading: false,
        ids: action.gln.map(g => g.id),
        total: action.total
      };
    case GlnActions.loadGlnFail.type:
      return {
        ... state,
        loading: false
      };
    default:
      return state;
  }
}

export const getLoading  = (state: State) => state.loading;
export const getTotal = (state: State) => state.total;
export const getIds = (state: State) => state.ids;


