import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DefaultComponent } from './default.component';
import { DefaultModule } from './default.module';

import { TranslateStubModule } from '../../shared/utils/stubs/translate-stub.module';

describe('Testes do DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultComponent],
      imports: [
        DefaultModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateStubModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o DefaultComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testando o toggleLeftBar', () => {
    it('Deve iniciar o leftBarOpen com false', () => {
      // Assert
      expect(component.leftBarOpen).toBe(false);
    });

    it('Deve mudar o valor de leftBarOpen false para true', () => {
      expect(component.leftBarOpen).toBe(false);

      // Act
      component.toggleLeftBar();

      // Assert
      expect(component.leftBarOpen).toBe(true);
    });

    it('Deve mudar o valor de leftBarOpen para false', () => {
      // Arrange
      component.leftBarOpen = true;
      expect(component.leftBarOpen).toBe(true);

      // Act
      component.toggleLeftBar();

      // Assert
      expect(component.leftBarOpen).toBe(false);
    });
  });

  describe('Testando o closeLeftBar', () => {
    it('Deve mudar o valor de leftBarOpen para false', () => {
      // Arrange
      component.leftBarOpen = true;
      expect(component.leftBarOpen).toBe(true);

      // Act
      component.closeLeftBar();

      // Assert
      expect(component.leftBarOpen).toBe(false);
    });

    it('Deve manter o valor de leftBarOpen com false', () => {
      // Arrange
      component.leftBarOpen = false;
      expect(component.leftBarOpen).toBe(false);

      // Act
      component.closeLeftBar();

      // Assert
      expect(component.leftBarOpen).toBe(false);
    });
  });
});
