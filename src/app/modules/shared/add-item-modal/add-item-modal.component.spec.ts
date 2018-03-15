import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemModalComponent } from './add-item-modal.component';
import { testingModule } from './../../../mocks/test.module';

describe('AddItemModalComponent', () => {
  let component: AddItemModalComponent;
  let fixture: ComponentFixture<AddItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
