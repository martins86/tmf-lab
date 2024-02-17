import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, DashboardRoutingModule, MatIconModule, TranslateModule.forChild()],
	exports: [DashboardComponent],
})
export class DashboardModule {}
