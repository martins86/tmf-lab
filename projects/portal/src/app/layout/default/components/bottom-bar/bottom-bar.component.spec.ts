import { DebugElement, NO_ERRORS_SCHEMA, Predicate } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TranslateTestingModule } from 'ngx-translate-testing';

import { TranslateStubModule } from '@utils/stubs/translate-stub.module';
import { BottomBarComponent } from './bottom-bar.component';
import { DefaultModule } from '../../default.module';

describe('Testes do BottomBarComponent', () => {
  let component: BottomBarComponent;
  let fixture: ComponentFixture<BottomBarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  function beforeEachAll(): void {
    fixture = TestBed.createComponent(BottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function textElementByCss(ByCss: Predicate<DebugElement>): HTMLElement {
    de = fixture.debugElement.query(ByCss);
    el = de.nativeElement;

    return el;
  }

  describe('Testando o footer', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BottomBarComponent],
        imports: [DefaultModule, RouterTestingModule, TranslateStubModule],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    });

    beforeEach(() => {
      return beforeEachAll();
    });

    it('Deve inicializar o Footer', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Testando o texto traduzido em en no footer', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BottomBarComponent],
        imports: [
          DefaultModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            'en',
            require('../../../../../assets/i18n/en.json')
          ),
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      return beforeEachAll();
    });

    it('Deve ser exibido o texto "TMF Lab © All rights reserved 2023-currentYear" ', () => {
      // Arrange
      const textEn = `TMF Lab © All rights reserved 2023-${component.currentYear}`;
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim();

      // Assert
      expect(textElement).toEqual(textEn);
    });
  });

  describe('Testando o texto traduzido em pt no footer', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BottomBarComponent],
        imports: [
          DefaultModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            'pt',
            require('../../../../../assets/i18n/pt.json')
          ),
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      return beforeEachAll();
    });

    it('Deve ser exibido o texto "TMF Lab © Todos os direitos reservados 2023-currentYear" ', () => {
      // Arrange
      const textPT = `TMF Lab © Todos os direitos reservados 2023-${component.currentYear}`;
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim();

      // Assert
      expect(textElement).toEqual(textPT);
    });
  });
});
