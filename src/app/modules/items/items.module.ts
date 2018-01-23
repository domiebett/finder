import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LostAndFoundComponent } from './lost-and-found/lost-and-found.component';
import { ItemsTableComponent } from './items-table/items-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    LostAndFoundComponent,
    ItemsTableComponent
  ]
})
export class ItemsModule { }
