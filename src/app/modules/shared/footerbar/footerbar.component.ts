import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.scss']
})
export class FooterbarComponent implements OnInit {

  subscription;
  pagination;
  @Output() paginationPage = new EventEmitter();

  constructor(private itemsService: ItemsService) {
    this.pagination = this.itemsService.pagination;
    this.subscription = itemsService.paginationChange
      .subscribe((pagination) => {
        this.pagination = pagination;
      });
  }

  ngOnInit() {
  }

  /**Emits the pagination page number
   *
   * @param pageNumber - pagination page number
   */
  emitPaginationPage(pageNumber) {
    this.paginationPage.emit(pageNumber);
  }

}
