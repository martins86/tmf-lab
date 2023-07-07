import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { EnvTranslations } from './shared/utils/env-translate';
import { EnvThemes } from './shared/utils/env-theme';

import { UserDefinitionsService } from './shared/services/user-definitions.service';
import { UserThemeService } from './shared/services/user-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  session: any;

  constructor(
    private translateService: TranslateService,
    private userDefinitionsService: UserDefinitionsService,
    private userThemeService: UserThemeService
  ) {
    this.session = this.userDefinitionsService.getDefinitions();
  }

  ngOnInit() {
    this.firstLoadApp();
  }

  firstLoadApp(): void {
    if (this.session) {
      this.setDefinitionDefault(this.session.language, this.session.theme);
    } else {
      this.setDefinitionDefault(
        EnvTranslations.portugueseLanguage,
        EnvThemes.lightClassName
      );
    }
  }

  setDefinitionDefault(lang: string, theme: string): void {
    this.userThemeService.setThemeSession(theme);
    this.userDefinitionsService.setDefinitionDefault(lang, theme);
    this.translateService.addLangs(EnvTranslations.languages);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
