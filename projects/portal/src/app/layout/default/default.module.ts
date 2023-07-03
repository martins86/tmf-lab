import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

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
  imports: [CommonModule, DefaultRoutingModule],
  exports: [DefaultComponent],
})
export class DefaultModule {}
