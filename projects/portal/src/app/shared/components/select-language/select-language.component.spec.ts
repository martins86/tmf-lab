import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { UserDefinitionsService } from '@services/user/user-definitions.service';

import { SelectLanguageComponent } from './select-language.component';
import { SelectLanguageModule } from './select-language.module';

describe('Testes do SelectLanguageComponent', () => {
  let component: SelectLanguageComponent;
  let fixture: ComponentFixture<SelectLanguageComponent>;
  let userDefinitionsService: UserDefinitionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectLanguageComponent],
      imports: [SelectLanguageModule],
      providers: [UserDefinitionsService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    userDefinitionsService = TestBed.inject(UserDefinitionsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o SelectLanguageComponent', () => {
    expect(component).toBeTruthy();
  });
});
