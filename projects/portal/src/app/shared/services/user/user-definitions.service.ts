import { Injectable } from '@angular/core';

import { ISessionUser } from '@interfaces/isession-user.interface';

@Injectable({
	providedIn: 'root',
})
export class UserDefinitionsService {
	setDefinitionDefault(language: string, theme: string): void {
		sessionStorage.setItem(
			'user-definitions',
			JSON.stringify({
				language: language,
				theme: theme,
			})
		);
	}

	updateDefinitionItem(defKey: string, defValue: any): void {
		let session = this.getDefinitions();

		if (session) {
			let newSession = { ...session, [defKey]: defValue };
			sessionStorage.setItem('user-definitions', JSON.stringify(newSession));
		}
	}

	getDefinitions(): ISessionUser {
		const definitionSession = sessionStorage.getItem('user-definitions') as string;
		return JSON.parse(definitionSession);
	}
}
