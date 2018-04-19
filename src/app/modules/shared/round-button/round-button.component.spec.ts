import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RoundButtonComponent } from './round-button.component';
import { testingModule } from './../../../mocks/test.module';

describe('AddButtonComponent', () => {
  let component: RoundButtonComponent;
  let fixture: ComponentFixture<RoundButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundButtonComponent);
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
