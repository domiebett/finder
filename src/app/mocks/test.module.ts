import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';
import { ModalService } from './../services/modal.service';
import { ItemsService } from './../services/items.service';
import { HttpService } from './../services/http.service';
import { ErrorService } from './../services/error.service';
import { CategoryService } from './../services/category.service';
import { AlertService } from './../services/alert.service';
import { PaginateComponent } from './../modules/shared/paginate/paginate.component';
import { ModalComponent } from './../modules/shared/modal/modal.component';
import { LoaderComponent } from './../modules/shared/loader/loader.component';
import { HeaderComponent } from './../modules/shared/header/header.component';
import { AuthComponent } from './../modules/shared/auth/auth.component';
import { AlertComponent } from './../modules/shared/alert/alert.component';
import { AddItemModalComponent } from './../modules/shared/add-item-modal/add-item-modal.component';
import { AddButtonComponent } from './../modules/shared/add-button/add-button.component';
import { ItemsTableComponent } from './../modules/items/items-table/items-table.component';
import { DashboardComponent } from './../modules/items/dashboard/dashboard.component';
import { LostAndFoundComponent } from '../modules/items/lost-and-found/lost-and-found.component';
import { DropDownComponent } from '../modules/shared/drop-down/drop-down.component';
import { ErrorComponent } from '../modules/shared/error/error.component';
import { FooterbarComponent } from '../modules/shared/footerbar/footerbar.component';
import { ItemComponent } from '../modules/shared/item/item.component';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { Location } from '@angular/common';

const appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    { path: 'dashboard', component: DashboardComponent },

    { path: 'items/:section', component: LostAndFoundComponent},

    { path: 'error/:errorCode', component: ErrorComponent },

    { path: '**', redirectTo: 'error/404', pathMatch: 'full'}
];

export const testingModule = {
    imports: [
        HttpModule,
        RouterTestingModule.withRoutes(appRoutes),
        FormsModule,
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ItemsTableComponent,
        LostAndFoundComponent,
        AddButtonComponent,
        AddItemModalComponent,
        AlertComponent,
        AuthComponent,
        DropDownComponent,
        ErrorComponent,
        FooterbarComponent,
        HeaderComponent,
        ItemComponent,
        LoaderComponent,
        ModalComponent,
        PaginateComponent
    ],
    providers: [
        ConnectionBackend,
        AlertService,
        AuthService,
        CategoryService,
        ErrorService,
        HttpService,
        ItemsService,
        ModalService,
    ]
};
