import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGln from 'src/app/dashboard/store/reducers';
// tslint:disable-next-line:import-spacing
import  {
  GlnEffect
} from '../store/effects';
@NgModule({
  declarations: [EnterpriseComponent],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    NgZorroAntdModule,
    StoreModule.forFeature('business', fromGln.reducer),
    EffectsModule.forFeature([GlnEffect])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EnterpriseModule { }
