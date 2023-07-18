import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { UserDefinitionsService } from '@services/user/user-definitions.service';
import { UserThemeService } from '@services/user/user-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  session: any; // TODO: aplicar tipo
  languages: string[] = ['pt', 'en'];

  constructor(
    private translateService: TranslateService,
    private userDefinitionsService: UserDefinitionsService,
    private userThemeService: UserThemeService
  ) {
    this.session = this.userDefinitionsService.getDefinitions();
    console.log(this.session);
  }

  ngOnInit() {
    this.firstLoadApp();
  }

  firstLoadApp(): void {
    if (this.session) {
      this.setDefinitionDefault(this.session.language, this.session.theme);
    } else {
      this.setDefinitionDefault('pt', 'light-theme');
    }
  }

  setDefinitionDefault(lang: string, theme: string): void {
    this.userThemeService.setThemeSession(theme);
    this.userDefinitionsService.setDefinitionDefault(lang, theme);
    this.translateService.addLangs(this.languages);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
