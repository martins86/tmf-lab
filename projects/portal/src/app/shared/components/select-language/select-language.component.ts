import { Component } from '@angular/core';

import { UserDefinitionsService } from '@services/user/user-definitions.service';

@Component({
	selector: 'app-select-language',
	templateUrl: './select-language.component.html',
	styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent {
	session: any;
	textLanguage: string;
	languageOptions = [
		{
			language: 'pt',
			textName: 'PT - Português',
			translations: 'pt.json',
		},
		{
			language: 'en',
			textName: 'EN - English',
			translations: 'en.json',
		},
	];

	constructor(private userDefinitionsService: UserDefinitionsService) {
		this.session = this.userDefinitionsService.getDefinitions();
		this.textLanguage = this.changeTextLanguage(this.session?.language);
	}

	changeLanguage(lang: string): void {
		this.userDefinitionsService.updateDefinitionItem('language', lang);
		this.textLanguage = this.changeTextLanguage(lang);
		this.fixRemoveClass();
		this.reloadPage();
	}

	reloadPage(): void {
		window.location.reload();
	}

	fixRemoveClass(): void {
		let element = document.querySelector('app-left-bar.dark-theme');
		element?.classList.remove('dark-theme');
	}

	changeTextLanguage(lang: string): string {
		const index = this.languageOptions.findIndex((item) => item.language === lang);
		return this.languageOptions[index]?.textName.slice(5);
	}
}
