import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UserDefinitionsService } from './user-definitions.service';

@Injectable({
  providedIn: 'root',
})
export class UserThemeService {
  lightClassName = 'light-theme';
  darkClassName = 'dark-theme';

  constructor(private userDefinitionsService: UserDefinitionsService) {}

  toggleThemes(toggleControl: FormControl, overlayElement: HTMLElement): void {
    toggleControl.valueChanges.subscribe((isDark: boolean) => {
      if (isDark) {
        this.switchClass(
          this.darkClassName,
          this.lightClassName,
          overlayElement
        );
        this.userDefinitionsService.updateDefinitionItem(
          'theme',
          this.darkClassName
        );
      } else {
        this.switchClass(
          this.lightClassName,
          this.darkClassName,
          overlayElement
        );
        this.userDefinitionsService.updateDefinitionItem(
          'theme',
          this.lightClassName
        );
      }
    });
  }

  getThemeSession(): string {
    let userDefinitionSession = this.userDefinitionsService.getDefinitions();
    return userDefinitionSession?.theme || this.lightClassName;
  }

  setThemeSession(theme: string): void {
    this.userDefinitionsService.updateDefinitionItem('theme', theme);
    if (theme === this.darkClassName) {
      this.switchClass(this.darkClassName, this.lightClassName);
    } else {
      this.switchClass(this.lightClassName, this.darkClassName);
    }
  }

  switchClass(
    addClass: string,
    removeClass: string,
    overlayElement?: HTMLElement
  ): void {
    if (overlayElement) {
      overlayElement.classList.remove(removeClass);
      overlayElement.classList.add(addClass);
    }
    document.body.classList.remove(removeClass);
    document.body.classList.add(addClass);
    let element = document.querySelector('app-left-bar.dark-theme');
    element?.classList.remove(this.darkClassName);
  }
}
