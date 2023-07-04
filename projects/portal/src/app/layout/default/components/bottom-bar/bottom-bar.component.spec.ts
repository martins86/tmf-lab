import { DebugElement, NO_ERRORS_SCHEMA, Predicate } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TranslateTestingModule } from 'ngx-translate-testing'

import { BottomBarComponent } from './bottom-bar.component'
import { DefaultModule } from '../../default.module'
import { TranslateStubModule } from 'projects/portal/src/app/shared/utils/stubs/translate-stub.module'
import { EnvTranslations } from 'projects/portal/src/app/shared/utils/env-translate'
import { By } from '@angular/platform-browser'

describe('Testes do BottomBarComponent', () => {
  let component: BottomBarComponent
  let fixture: ComponentFixture<BottomBarComponent>
  let de: DebugElement
  let el: HTMLElement

  function beforeEachAll(): void {
    fixture = TestBed.createComponent(BottomBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }

  function textElementByCss(ByCss: Predicate<DebugElement>): HTMLElement {
    de = fixture.debugElement.query(ByCss)
    el = de.nativeElement

    return el
  }

  describe('Testando o footer', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BottomBarComponent],
        imports: [DefaultModule, RouterTestingModule, TranslateStubModule],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('Deve criar o Footer', () => {
      expect(component).toBeTruthy()
    })
  })

  describe('Testando o texto translate en no footer', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BottomBarComponent],
        imports: [
          DefaultModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            EnvTranslations.englishLanguage,
            require(`../../../../../assets/i18n/${EnvTranslations.englishTranslations}`)
          ),
        ],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('Deve ser exibido o texto "TMF Lab © All rights reserved 2023- current year" ', () => {
      // Arrange
      const textEn = `TMF Lab © All rights reserved 2023-${component.currentYear}`
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim()

      // Assert
      expect(textElement).toEqual(textEn)
    })
  })

  describe('Testando o texto translate pt no footer', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BottomBarComponent],
        imports: [
          DefaultModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            EnvTranslations.portugueseLanguage,
            require(`../../../../../assets/i18n/${EnvTranslations.portugueseTranslations}`)
          ),
        ],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('Deve ser exibido o texto "TMF Lab © Todos os direitos reservados 2023- current year" ', () => {
      // Arrange
      const textPT = `TMF Lab © Todos os direitos reservados 2023-${component.currentYear}`
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim()

      // Assert
      expect(textElement).toEqual(textPT)
    })
  })
})
