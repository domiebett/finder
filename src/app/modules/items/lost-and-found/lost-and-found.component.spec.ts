import { AlertService } from './../../../services/alert.service';
import { ItemsTableComponent } from './../items-table/items-table.component';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { LostAndFoundComponent } from './lost-and-found.component';
import { testingModule } from './../../../mocks/test.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalService } from '../../../services/modal.service';

describe('LostAndFoundComponent', () => {
  let component: LostAndFoundComponent;
  let fixture: ComponentFixture<LostAndFoundComponent>;
  let modalService, alertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAndFoundComponent);
    component = fixture.componentInstance;
    modalService = TestBed.get(ModalService);
    alertService = TestBed.get(AlertService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('succesfully changes sections', () => {
    component.switchSection('found');
    expect(component.sectionToShow).toBe('found');
  });

  it('navigates to 404 page if section is not found or lost', fakeAsync(() => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.checkSectionValidity('wrong_section');
    expect(navigateSpy).toHaveBeenCalledWith(['/error/404']);
  }));

  it('calls open modal function in modal service', () => {
    spyOn(modalService, 'openAddItemModal');
    component.openAddItemModal();
    expect(modalService.openAddItemModal).toHaveBeenCalled();
  });

  it('calls alert service method popUpAlert', () => {
    spyOn(alertService, 'popUpAlert');
    component.popUpLoginRequiredAlert();
    const warningText = 'You must be logged in to add an item';
    expect(alertService.popUpAlert).toHaveBeenCalledWith(warningText, 'warning');
  });
});
