import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbarComponent } from './footerbar.component';
import { testingModule } from './../../../mocks/test.module';

describe('FooterbarComponent', () => {
  let component: FooterbarComponent;
  let fixture: ComponentFixture<FooterbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
