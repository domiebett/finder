import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../../../services/items.service';
import { ModalService } from './../../../services/modal.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {
  @Input() itemsType;
  items;
  paramData = { reporter: null };

  constructor(
    private itemsService: ItemsService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    if (this.itemsType === 'found') {
      this.paramData.reporter = 'finder';
    } else if (this.itemsType === 'lost') {
      this.paramData.reporter = 'owner';
    }

    this.getItems();
  }

  /**
   * Send http request to get items with reporter filter
   */
  getItems() {
    this.itemsService.getItems(this.paramData)
      .toPromise()
      .then((response) => {
        this.items = this.formatItem(response.items);
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

  /**
   * Opens the add lost item modal
   */
  openAddItemModal() {
    this.modalService.openAddItemModal();
  }
}
