import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { ModalComponent } from './modal/modal.component';

import { AuthService } from './../../services/auth.service';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { PaginateComponent } from './paginate/paginate.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
    AuthComponent,
    FooterbarComponent,
    PaginateComponent,
    AddItemModalComponent,
    DropDownComponent,
    LoaderComponent,
    ErrorComponent,
    AlertComponent
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    FooterbarComponent,
    DropDownComponent,
    LoaderComponent,
    ErrorComponent,
    AlertComponent
  ],
  providers: [
    ModalComponent,
    AuthService
  ]
})
export class SharedModule { }
