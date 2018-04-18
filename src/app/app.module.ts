import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutesModule } from './app-routes-module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsModule } from './modules/items/items.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ItemsService } from './services/items.service';
import { ModalService } from './services/modal.service';
import { HttpService } from './services/http.service';
import { CategoryService } from './services/category.service';
import { ErrorService } from './services/error.service';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    SharedModule,
    ItemsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    ItemsService,
    ModalService,
    HttpService,
    CategoryService,
    ErrorService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
