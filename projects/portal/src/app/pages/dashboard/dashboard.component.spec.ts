import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { TranslateStubModule } from '@utils/stubs/translate-stub.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';

describe('Testes do DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [DashboardModule, TranslateStubModule, RouterModule.forRoot([])],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar o DashboardComponent', () => {
    expect(component).toBeTruthy();
  });
});
