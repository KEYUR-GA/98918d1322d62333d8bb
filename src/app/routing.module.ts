import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { TableComponent } from './component/table/table.component';
import { MatDialogModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PopupComponent } from './modal/popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [PopupComponent],
  declarations: [TableComponent, PopupComponent],
  exports: [TableComponent,]
})
export class RoutingModule { }
