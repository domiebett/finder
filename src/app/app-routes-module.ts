import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/items/dashboard/dashboard.component';
import { LostAndFoundComponent } from './modules/items/lost-and-found/lost-and-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    { path: 'dashboard', component: DashboardComponent },

    { path: 'items/:section', component: LostAndFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutesModule { }
