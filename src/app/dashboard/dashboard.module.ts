import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DasboadRoutingModule} from './dasboad-routing.module';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import {NZ_I18N, en_US} from 'ng-zorro-antd/i18n';
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import en from '@angular/common/locales/en';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NgZorroAntdModule} from 'ng-zorro-antd';

registerLocaleData(en);
import {
  EnterpriseModule,
  ShopModule
} from './';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DasboadRoutingModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzLayoutModule,
    NgZorroAntdModule,
    EnterpriseModule,
    ShopModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}, {provide: NZ_ICONS, useValue: icons}]
})
export class DashboardModule {
}
