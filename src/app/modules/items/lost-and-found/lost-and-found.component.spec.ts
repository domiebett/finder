import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostAndFoundComponent } from './lost-and-found.component';

describe('LostAndFoundComponent', () => {
  let component: LostAndFoundComponent;
  let fixture: ComponentFixture<LostAndFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostAndFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
