import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { EnvThemes } from '@utils/env-theme';
import { UserDefinitionsService } from './user-definitions.service';
import { UserThemeService } from './user-theme.service';

describe('Testes do UserThemeService', () => {
  let service: UserThemeService;
  let userDefinitionsService: UserDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserThemeService);
    userDefinitionsService = TestBed.inject(UserDefinitionsService);
  });

  it('Deve criar o serviço UserThemeService', () => {
    expect(service).toBeTruthy();
  });

  describe('Testando o toggleThemes', () => {
    let mockToggleControl = new FormControl();
    let mockOverlayElement = document.createElement('div');
    mockOverlayElement.classList.add('cdk-overlay-container');

    it('Deve chamar o switchClass com "dark-theme", "light-theme"', () => {
      // Arrange
      mockOverlayElement.classList.add('light-theme');

      spyOn(service, 'switchClass');
      spyOn(userDefinitionsService, 'updateDefinitionItem');

      // Act
      service.toggleThemes(mockToggleControl, mockOverlayElement);

      mockToggleControl.setValue(true);

      // Assert
      expect(service.switchClass).toHaveBeenCalled();
      expect(service.switchClass).toHaveBeenCalledWith(
        'dark-theme',
        'light-theme',
        mockOverlayElement
      );
    });

    it('Deve chamar o updateDefinitionItem com theme "dark-theme"', () => {
      // Arrange
      mockOverlayElement.classList.add('light-theme');

      spyOn(service, 'switchClass');
      spyOn(userDefinitionsService, 'updateDefinitionItem');

      // Act
      service.toggleThemes(mockToggleControl, mockOverlayElement);

      mockToggleControl.setValue(true);

      // Assert
      expect(userDefinitionsService.updateDefinitionItem).toHaveBeenCalled();
      expect(userDefinitionsService.updateDefinitionItem).toHaveBeenCalledWith(
        'theme',
        'dark-theme'
      );
    });

    it('Deve chamar o switchClass com "light-theme", "dark-theme"', () => {
      // Arrange
      mockOverlayElement.classList.add('dark-theme');

      spyOn(service, 'switchClass');
      spyOn(userDefinitionsService, 'updateDefinitionItem');

      // Act
      service.toggleThemes(mockToggleControl, mockOverlayElement);

      mockToggleControl.setValue(false);

      // Assert
      expect(service.switchClass).toHaveBeenCalled();
      expect(service.switchClass).toHaveBeenCalledWith(
        'light-theme',
        'dark-theme',
        mockOverlayElement
      );
    });

    it('Deve chamar o updateDefinitionItem com theme "light-theme"', () => {
      // Arrange
      mockOverlayElement.classList.add('dark-theme');

      spyOn(service, 'switchClass');
      spyOn(userDefinitionsService, 'updateDefinitionItem');

      // Act
      service.toggleThemes(mockToggleControl, mockOverlayElement);

      mockToggleControl.setValue(false);

      // Assert
      expect(userDefinitionsService.updateDefinitionItem).toHaveBeenCalled();
      expect(userDefinitionsService.updateDefinitionItem).toHaveBeenCalledWith(
        'theme',
        'light-theme'
      );
    });
  });

  describe('Testando o getThemeSession', () => {
    it('Deve chamar o userDefinitionsService e o getDefinitions', () => {
      // Arrange
      const spy = spyOn(
        userDefinitionsService,
        'getDefinitions'
      ).and.returnValue('any-theme');

      // Act
      service.getThemeSession();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar um theme valido do getDefinitions', () => {
      // Arrange
      const theme = { theme: 'any-theme' };
      const spy = spyOn(
        userDefinitionsService,
        'getDefinitions'
      ).and.returnValue(theme);

      // Act
      const response = service.getThemeSession();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(response).toBe(theme.theme);
    });

    it('Deve retornar o light theme quando o getDefinitions retornar undefined', () => {
      // Arrange
      const theme = { theme: undefined };
      const themeLight = EnvThemes.lightClassName;
      const spy = spyOn(
        userDefinitionsService,
        'getDefinitions'
      ).and.returnValue(theme);

      // Act
      const response = service.getThemeSession();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(response).toBe(themeLight);
    });
  });
});
