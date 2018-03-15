import { AlertService } from './../../../services/alert.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ItemsService } from '../../../services/items.service';
import { ModalService } from './../../../services/modal.service';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit, OnDestroy {
  @Input() itemsType;
  items;
  currentUser;
  subscription;
  loading = true;
  itemLayout = 'classic';
  itemLayouts = {
    'compact': [ 'col-xl-2', 'col-lg-3', 'col-md-4', 'col-sm-6', 'col-12' ],
    'classic': [ 'col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-12' ]
  };
  paramData = { reporter: null };

  constructor(
    private itemsService: ItemsService,
    private modalService: ModalService,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.currentUser = this.authService.currentUser;
    this.subscription = authService.currentUserChange
      .subscribe((user) => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
    if (this.itemsType === 'found') {
      this.paramData.reporter = 'finder';
    } else if (this.itemsType === 'lost') {
      this.paramData.reporter = 'owner';
    }

    this.getItems();
  }

  /**
   * Unsubscribe from subscription when the component is destroyed
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Send http request to get items with reporter filter
   */
  getItems(pageNumber?: number) {
    this.loading = true;
    if (pageNumber) {
      this.paramData['page'] = pageNumber;
    }
    this.paramData['limit'] = 40;
    this.itemsService.getItems(this.paramData)
      .toPromise()
      .then((response) => {
        this.items = this.formatItem(response.items);
        this.loading = false;
      });
  }

  /**
   * Change the content to be displayed for each item
   *
   * @param {number} itemIndex - index of item clicked
   * @param {string} toDisplay - content to be displayed
   */
  changeDisplayType(itemIndex, toDisplay) {
    const item = this.items[itemIndex];
    item['toDisplay'] = toDisplay;
  }

  /**
   * Formats items to desirable format
   *
   * @param {array} items - all items to be formated
   *
   * @return {array} formated Items
   */
  formatItem(items) {
    for (const item of items) {
      item['toDisplay'] = 'description';
    }
    return items;
  }
}
