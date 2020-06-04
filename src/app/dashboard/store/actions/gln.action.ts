import {createAction, props, union} from '@ngrx/store';
import {GlnModel} from '../../models';

export const loadGln = createAction(
  '[Gln Page] Load Gln',
  props<{ query: any }>()
);

export const loadGlnSuccess = createAction(
  '[Collection API] Load Gln Success',
  props<{ gln: GlnModel[], total: number }>()
);

export const loadGlnFail = createAction(
  '[Collection API] Load Gln Fail',
  props<{ error: any }>()
);

export const updateGln = createAction(
  '[Gln Update] Update Gln',
  props<{ query?: any }>()
);

export const updateGlnSuccess = createAction(
  '[Collect API] Update Gln Success',
  props<{ id: any, gln: GlnModel[]}>()
);
export const updateGLnFail = createAction(
  '[Collect API] Update Gln Fail',
  props<{ error: any}>()
);
const all = union({
  loadGln,
  loadGlnSuccess,
  loadGlnFail,
  updateGln,
  updateGlnSuccess,
  updateGLnFail
});

export type GlnActionsUnion = typeof all;
