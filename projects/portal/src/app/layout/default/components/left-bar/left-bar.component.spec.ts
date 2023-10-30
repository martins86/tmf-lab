import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TranslateStubModule } from '@utils/stubs/translate-stub.module';

import { DefaultModule } from '@layout/default/default.module';

import { UserThemeService } from '@services/user/user-theme.service';

import { LeftBarComponent } from './left-bar.component';

describe('Testes do LeftBarComponent', () => {
  let component: LeftBarComponent;
  let fixture: ComponentFixture<LeftBarComponent>;
  let userThemeService: UserThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftBarComponent],
      imports: [
        DefaultModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        TranslateStubModule,
      ],
      providers: [UserThemeService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    userThemeService = TestBed.inject(UserThemeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o LeftBarComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testando o ngOnInit', () => {
    it('Deve chamar o toggleThemes', () => {
      // Arrange
      spyOn(component, 'toggleThemes');
      // Act
      component.ngOnInit();
      // Assert
      expect(component.toggleThemes).toHaveBeenCalled();
    });
  });

  describe('Testando o closeLeftBar', () => {
    it('Deve emitir o evento de fechar com emitCloseLeftBar', () => {
      // Arrange
      spyOn(component.emitCloseLeftBar, 'emit');
      // Act
      component.closeLeftBar();
      // Assert
      expect(component.emitCloseLeftBar.emit).toHaveBeenCalled();
      expect(component.emitCloseLeftBar.emit).toHaveBeenCalledWith(
        'closeLeftBar'
      );
    });
  });

  describe('Testando o toggleThemes', () => {
    it('Deve chamar o toggleThemes', () => {
      // Arrange
      const spy = spyOn(userThemeService, 'toggleThemes');

      // Act
      component.toggleThemes();

      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Deve mudar o valor no className para "light-theme"', () => {
      // Arrange
      spyOn(userThemeService, 'getThemeSession').and.returnValue('light-theme');

      // Act
      component.toggleThemes();

      // Assert
      expect(component.className).toBe('light-theme');
    });

    it('Deve mudar o valor no className para "dark-theme"', () => {
      // Arrange
      spyOn(userThemeService, 'getThemeSession').and.returnValue('dark-theme');

      // Act
      component.toggleThemes();

      // Assert
      expect(component.className).toBe('dark-theme');
    });

    it('Deve mudar o valor do toggleControl para false quando for "light-theme"', () => {
      // Arrange
      spyOn(userThemeService, 'getThemeSession').and.returnValue('light-theme');

      // Act
      component.toggleThemes();

      // Assert
      expect(component.toggleControl.value).toBe(false);
    });

    it('Deve mudar o valor do toggleControl para true quando for "dark-theme"', () => {
      // Arrange
      spyOn(userThemeService, 'getThemeSession').and.returnValue('dark-theme');

      // Act
      component.toggleThemes();

      // Assert
      expect(component.toggleControl.value).toBe(true);
    });
  });
});
