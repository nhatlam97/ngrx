import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {map, mergeMap, catchError, switchMap} from 'rxjs/operators';
import { GlnService } from '../../services';
import {GlnActions} from '../actions';
@Injectable()
export class GlnEffect {
  constructor(
    private actions$: Actions<GlnActions.GlnActionsUnion>,
    private glnService: GlnService
  ) {
  }
  lisGln$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GlnActions.loadGln.type),
      switchMap((action) => {
        return this.glnService.getAllGLn(action.query).pipe(
          map(res => {
            if (res.code === 1) {
              return GlnActions.loadGlnSuccess({
                gln: res.data.items,
                total: res.data.totalElement
              });
            }
            return GlnActions.loadGlnFail({error: res.message});
          }),
          catchError(err => of (GlnActions.loadGlnFail({error: err})))
        );
      })
    )
  );
}
