import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ISessionUser } from '@interfaces/isession-user.interface';

import { UserDefinitionsService } from '@services/user/user-definitions.service';
import { UserThemeService } from '@services/user/user-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  session: ISessionUser;
  languages: string[] = ['pt', 'en'];

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
    const setLanguage = this.session?.language ? this.session?.language : 'pt';
    const setTheme = this.session?.theme ? this.session?.theme : 'light-theme';

    this.setDefinitionDefault(setLanguage, setTheme);
  }

  setDefinitionDefault(lang: string, theme: string): void {
    this.userThemeService.setThemeSession(theme);
    this.userDefinitionsService.setDefinitionDefault(lang, theme);
    this.translateService.addLangs(this.languages);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
