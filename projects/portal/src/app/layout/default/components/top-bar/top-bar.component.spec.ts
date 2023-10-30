import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';

describe('Testes do TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o TopBarComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testando o toggleBtnAnimate', () => {
    it('Deve manter sem o "active" até chamar o toggleBtnAnimate', () => {
      // Arrange
      let btnElement =
        fixture.debugElement.nativeElement.querySelector('.toggle');

      // Assert
      expect(btnElement).toBeTruthy();
      expect(btnElement.classList).not.toContain('active');
    });

    it('Deve usar o "active" após chamar o toggleBtnAnimate', () => {
      // Arrange
      let btnElement =
        fixture.debugElement.nativeElement.querySelector('.toggle');

      // Act
      btnElement.click();

      // Assert
      expect(btnElement).toBeTruthy();
      expect(btnElement.classList).toContain('active');
    });
  });

  describe('Testando o toggleLeftBar', () => {
    it('Deve emit emitToggleLeftBar', () => {
      // Arrange
      spyOn(component.emitToggleLeftBar, 'emit');

      // Act
      component.toggleLeftBar();

      // Assert
      expect(component.emitToggleLeftBar.emit).toHaveBeenCalled();
    });

    it('Deve emit com a string toggleLeftBar', () => {
      // Arrange
      spyOn(component.emitToggleLeftBar, 'emit');

      // Act
      component.toggleLeftBar();

      // Assert
      expect(component.emitToggleLeftBar.emit).toHaveBeenCalledWith(
        'toggleLeftBar'
      );
    });
  });
});
