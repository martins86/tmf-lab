import { TestBed } from '@angular/core/testing';

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
  });
});
