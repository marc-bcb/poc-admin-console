import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../../../../environments/environment';
import {EntitiesState} from './entities/entities.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([EntitiesState],
      {
        developmentMode: !environment.production
      }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ]
})
export class StoreModule {
}
