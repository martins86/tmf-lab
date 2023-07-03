import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'

const materialModules = [
  MatSidenavModule,
  MatSlideToggleModule,
  ReactiveFormsModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
]

import { DefaultRoutingModule } from './default-routing.module'
import { DefaultComponent } from './default.component'
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { LeftBarComponent } from './components/left-bar/left-bar.component'
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component'

@NgModule({
  declarations: [
    DefaultComponent,
    TopBarComponent,
    LeftBarComponent,
    BottomBarComponent,
  ],
  imports: [CommonModule, DefaultRoutingModule, ...materialModules],
  exports: [DefaultComponent],
})
export class DefaultModule {}
