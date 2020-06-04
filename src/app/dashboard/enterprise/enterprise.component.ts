import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GlnActions} from '../store/actions';
import * as fromGln from '../store/reducers';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
  page = 1;
  // tslint:disable-next-line:variable-name
  page_size = 10;
  query;
  loading = true;
  glns = [];
  total = 0;
  loading$ = this.store.select(fromGln.getGlnListPageLoading);
  glns$ = this.store.select(fromGln.getGlnPageResults);
  total$ = this.store.select(fromGln.getGlnListPageTotal);

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.query = {
      page: this.page,
      page_size: this.page_size
    };
    this.store.dispatch(GlnActions.loadGln({
      query: this.query
    }));
    this.loading$.subscribe(
      res => {
        this.loading = res;
      }
    );
    this.glns$.subscribe(
      res => {
        this.glns = res;
      }
    );
    this.total$.subscribe(
      res => {
        this.total = res;
      }
    );
  }
}
