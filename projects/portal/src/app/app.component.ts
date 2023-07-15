import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ThemeProperties } from '@enums/theme-properties';

import { UtilsForTranslations } from '@interfaces/itranslate.interface';

import { UserDefinitionsService } from '@services/user/user-definitions.service';
import { UserThemeService } from '@services/user/user-theme.service';

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
        UtilsForTranslations.portugueseLanguage,
        ThemeProperties.lightClassName
      );
    }
  }

  setDefinitionDefault(lang: string, theme: string): void {
    this.userThemeService.setThemeSession(theme);
    this.userDefinitionsService.setDefinitionDefault(lang, theme);
    this.translateService.addLangs(UtilsForTranslations.languages);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
