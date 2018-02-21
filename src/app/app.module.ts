import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutesModule } from './app-routes-module';
import { BrowserModule } from '@angular/platform-browser';
import { ItemsModule } from './modules/items/items.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ItemsService } from './services/items.service';
import { ModalService } from './services/modal.service';
import { HttpService } from './services/http.service';
import { CategoryService } from './services/category.service';

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
  ],
  providers: [
    ItemsService,
    ModalService,
    HttpService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
