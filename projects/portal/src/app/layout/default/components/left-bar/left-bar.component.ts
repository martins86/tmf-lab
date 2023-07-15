import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';

import { ThemeProperties } from '@enums/theme-properties';

import { UserThemeService } from '@services/user/user-theme.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent implements OnInit {
  versionApp: string = require('@workspace/package.json').version;

  @Output()
  emitCloseLeftBar: EventEmitter<string> = new EventEmitter();

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor(
    private overlay: OverlayContainer,
    private userThemeService: UserThemeService
  ) {}

  ngOnInit(): void {
    this.toggleThemes();
  }

  toggleThemes(): void {
    this.userThemeService.toggleThemes(
      this.toggleControl,
      this.overlay.getContainerElement()
    );

    const currentTheme = this.userThemeService.getThemeSession();
    const isDark = currentTheme === ThemeProperties.darkClassName;
    this.className = currentTheme;
    this.toggleControl.setValue(isDark);
  }

  closeLeftBar(): void {
    this.emitCloseLeftBar.emit('closeLeftBar');
  }
}
