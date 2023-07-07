import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

const materialModules = [
  MatSidenavModule,
  MatSlideToggleModule,
  ReactiveFormsModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
];

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

import { LoadingModule } from './components/loading/loading.module';

import { SelectLanguageModule } from '@components/select-language/select-language.module';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    DefaultComponent,
    TopBarComponent,
    LeftBarComponent,
    BottomBarComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    TranslateModule.forChild(),
    ...materialModules,
    LoadingModule,
    SelectLanguageModule,
  ],
  exports: [DefaultComponent],
})
export class DefaultModule {}
