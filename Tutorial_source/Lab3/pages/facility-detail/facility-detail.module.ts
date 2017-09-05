import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacilityDetailPage } from './facility-detail';

@NgModule({
  declarations: [
    FacilityDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FacilityDetailPage),
  ],
  exports: [
    FacilityDetailPage
  ]
})
export class FacilityDetailPageModule {}
