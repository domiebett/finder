import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AddButtonComponent } from './add-button.component';
import { testingModule } from './../../../mocks/test.module';

describe('AddButtonComponent', () => {
  let component: AddButtonComponent;
  let fixture: ComponentFixture<AddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.click, 'emit');
    const nativeElement = fixture.nativeElement;
    component.buttonClick();
    expect(component.click.emit).toHaveBeenCalled();
  });
});
