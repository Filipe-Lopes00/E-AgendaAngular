import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { CoreModule } from "../../core/core.module";



@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppMaterialModule,
        CoreModule
    ],
})
export class DashboardModule { }
