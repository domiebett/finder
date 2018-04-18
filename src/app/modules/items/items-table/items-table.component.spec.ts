import { Subject } from 'rxjs/Subject';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTableComponent } from './items-table.component';
import { testingModule } from './../../../mocks/test.module';

class MockAuthService {
  currentUser = null;
  currentUserChange: Subject<string> = new Subject<string>();
}

class MockItemsService {
  items = [
    {
      name: 'Iphone X',
      category: 'phones',
    }
  ];

  getItems() {
    return this.items;
  }
}

describe('ItemsTableComponent', () => {
  let component: ItemsTableComponent;
  let fixture: ComponentFixture<ItemsTableComponent>;
  let itemsService, authService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTableComponent);
    component = fixture.componentInstance;
    itemsService = new MockItemsService();
    authService = new MockAuthService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls get items method on init', () => {
    spyOn(component, 'getItems');
    component.ngOnInit();
    expect(component.getItems).toHaveBeenCalled();
  });

  it('sets reporter parameter depending on items type', () => {
    spyOn(component, 'getItems');
    component.itemsType = 'found';
    component.ngOnInit();
    expect(component.params.reporter).toEqual('finder');
    component.itemsType = 'lost';
    component.ngOnInit();
    expect(component.params.reporter).toEqual('owner');
  });

  it('changes user if user changes in auth service', () => {
    component = new ItemsTableComponent(itemsService, authService);
    expect(component.currentUser).toBeNull();
    authService.currentUser = {name: 'User Name', email: 'user@example.com'};
    expect(component.currentUser = authService.currentUser);
  });
});
