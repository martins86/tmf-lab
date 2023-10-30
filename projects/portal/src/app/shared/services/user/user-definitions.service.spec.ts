import { TestBed } from '@angular/core/testing';

import { UserDefinitionsService } from './user-definitions.service';

describe('Testes do UserDefinitionsService', () => {
  let service: UserDefinitionsService;
  let sessionStorage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDefinitionsService);
  });

  beforeEach(() => {
    sessionStorage = window.sessionStorage;
  });

  it('Deve criar o UserDefinitionsService', () => {
    expect(service).toBeTruthy();
  });

  describe('Testando o setDefinitionDefault', () => {
    it('Deve guardar os valores default na sessionStorage', () => {
      // Arrange
      const definitionDefault = JSON.stringify({
        language: 'pt',
        theme: 'light-theme',
      });

      // Act
      service.setDefinitionDefault('pt', 'light-theme');

      // Assert
      expect(sessionStorage.getItem('user-definitions')).toBe(
        definitionDefault
      );
    });
  });

  describe('Testando o updateDefinitionItem', () => {
    it('Deve atualizar um item na sessionStorage', () => {
      // Arrange
      const alternateDefinition = JSON.stringify({
        language: 'en',
        theme: 'dark-theme',
      });
      service.setDefinitionDefault('pt', 'light-theme');

      // Act
      service.updateDefinitionItem('language', 'en');
      service.updateDefinitionItem('theme', 'dark-theme');

      // Assert
      expect(sessionStorage.getItem('user-definitions')).toBe(
        alternateDefinition
      );
    });
  });

  describe('Testando o getDefinitions', () => {
    it('Deve buscar um item na sessionStorage', () => {
      // Arrange
      const definitionDefault = JSON.stringify({
        language: 'pt',
        theme: 'light-theme',
      });
      service.setDefinitionDefault('pt', 'light-theme');

      // Act
      service.getDefinitions();

      // Assert
      expect(sessionStorage.getItem('user-definitions')).toBe(
        definitionDefault
      );
    });
  });
});
