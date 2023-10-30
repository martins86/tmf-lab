import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppModule, HttpLoaderFactory } from './app.module';

import { UserThemeService } from '@services/user/user-theme.service';
import { UserDefinitionsService } from '@services/user/user-definitions.service';

describe('Testes do AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;
  let userThemeService: UserThemeService;
  let userDefinitionsService: UserDefinitionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        AppModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [TranslateService, UserThemeService, UserDefinitionsService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    translateService = TestBed.inject(TranslateService);
    userThemeService = TestBed.inject(UserThemeService);
    userDefinitionsService = TestBed.inject(UserDefinitionsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o App', () => {
    expect(app).toBeTruthy();
  });

  describe('Testando o ngOnInit', () => {
    it('Deve chamar o firstLoadApp', () => {
      // Arrange
      spyOn(app, 'firstLoadApp');

      // Act
      app.ngOnInit();

      // Assert
      expect(app.firstLoadApp).toHaveBeenCalled();
    });
  });

  describe('Testando o firstLoadApp', () => {
    it('Deve chamar o firstLoadApp com session vazio e guardar/usar os valores default', () => {
      // Arrange
      app.session = { language: '', theme: '' };
      const spy = spyOn(app, 'setDefinitionDefault');

      // Act
      app.firstLoadApp();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('pt', 'light-theme');
    });

    it('Deve chamar o firstLoadApp com session "en" e "dark-theme"', () => {
      // Arrange
      app.session = { language: 'en', theme: 'dark-theme' };
      const spy = spyOn(app, 'setDefinitionDefault');

      // Act
      app.firstLoadApp();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('en', 'dark-theme');
    });
  });

  describe('Testando o setTranslateDefault', () => {
    it('Deve chamar o setThemeSession e guardar o theme "dark-theme"', () => {
      // Arrange
      const spy = spyOn(userThemeService, 'setThemeSession');

      // Act
      app.setDefinitionDefault('en', 'dark-theme');

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('dark-theme');
    });

    it('Deve chamar o setDefinitionDefault com language "pt" e o theme "dark-theme"', () => {
      // Arrange
      const spy = spyOn(userDefinitionsService, 'setDefinitionDefault');

      // Act
      app.setDefinitionDefault('pt', 'dark-theme');

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('pt', 'dark-theme');
    });

    it('Deve chamar o addLangs com languages "pt" e "en"', () => {
      // Arrange
      const langs = ['pt', 'en'];
      const spy = spyOn(translateService, 'addLangs');

      // Act
      app.setDefinitionDefault('pt', 'dark-theme');

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(langs);
    });

    it('Deve chamar o setDefaultLang com language "pt"', () => {
      // Arrange
      const spy = spyOn(translateService, 'setDefaultLang');

      // Act
      app.setDefinitionDefault('pt', 'dark-theme');

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('pt');
    });

    it('Deve chamar o use com language "en"', () => {
      // Arrange
      const spy = spyOn(translateService, 'use');

      // Act
      app.setDefinitionDefault('en', 'dark-theme');

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('en');
    });
  });
});
