import { Injectable } from '@angular/core'

import { EnvThemes } from '../utils/env-theme'

import { UserDefinitionsService } from './user-definitions.service'
import { FormControl } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class UserThemeService {
  light = EnvThemes.lightClassName
  dark = EnvThemes.darkClassName

  constructor(private userDefinitionsService: UserDefinitionsService) {}

  toggleThemes(toggleControl: FormControl, overlayElement: HTMLElement): void {
    toggleControl.valueChanges.subscribe((isDark: boolean) => {
      if (isDark) {
        this.switchClass(this.dark, this.light, overlayElement)
        this.userDefinitionsService.updateDefinitionItem('theme', this.dark)
      } else {
        this.switchClass(this.light, this.dark, overlayElement)
        this.userDefinitionsService.updateDefinitionItem('theme', this.light)
      }
    })
  }

  getThemeSession(): string {
    let userDefinitionSession = this.userDefinitionsService.getDefinitions()
    return userDefinitionSession?.theme || EnvThemes.lightClassName
  }

  setThemeSession(theme: string): void {
    this.userDefinitionsService.updateDefinitionItem('theme', theme)
    if (theme === this.dark) {
      this.switchClass(this.dark, this.light)
    } else {
      this.switchClass(this.light, this.dark)
    }
  }

  switchClass(
    addClass: string,
    removeClass: string,
    overlayElement?: HTMLElement
  ): void {
    if (overlayElement) {
      overlayElement.classList.remove(removeClass)
      overlayElement.classList.add(addClass)
    }
    document.body.classList.remove(removeClass)
    document.body.classList.add(addClass)
    let element = document.querySelector('app-left-bar.dark-theme')
    element?.classList.remove('dark-theme')
  }
}
