import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacilityGokhaPage } from './facility-gokha';

@NgModule({
  declarations: [
    FacilityGokhaPage,
  ],
  imports: [
    IonicPageModule.forChild(FacilityGokhaPage),
  ],
  exports: [
    FacilityGokhaPage
  ]
})
export class FacilityGokhaPageModule {}
