import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacilityLibraryPage } from './facility-library';

@NgModule({
  declarations: [
    FacilityLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(FacilityLibraryPage),
  ],
  exports: [
    FacilityLibraryPage
  ]
})
export class FacilityLibraryPageModule {}
