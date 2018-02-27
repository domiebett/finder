import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit, OnChanges {

  @Input() pagination;
  @Output() paginationPage = new EventEmitter();
  activeButton: number;
  activePaginationButtons: number[] = [];
  nextButtonActive: boolean;
  previousButtonActive: boolean;

  constructor() { }

  ngOnInit() {
    this.activeButton = 1;
    this.activePaginationButtons = [];
    this.nextButtonActive = true;
    this.previousButtonActive = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pagination.currentValue) {
      this.changePaginationValues(changes.pagination.currentValue);
    }
  }

  /**
   * Create list with 6 or less buttons values to be used for pagination
   *
   * @param pagination - values for pagination
   */
  changePaginationValues(pagination) {
    this.activePaginationButtons = [];
    this.activeButton = pagination.currentPage;
    this.previousButtonActive = pagination.currentPage > 1;
    this.nextButtonActive = pagination.currentPage < pagination.lastPage;

    // Creates the values for pagination buttons.

    const firstPaginationDefault =
      pagination.currentPage > 2 ?
      pagination.currentPage - 2 : pagination.currentPage - 1;
    let firstPaginationPage =
      firstPaginationDefault <= 0 ?
      firstPaginationDefault + 1 : firstPaginationDefault;
    const lastPaginationDefault = firstPaginationPage + 5;
    const lastPaginationPage =
      lastPaginationDefault > pagination.lastPage ?
      pagination.lastPage : lastPaginationDefault;
    firstPaginationPage =
      lastPaginationPage > 5 &&
      (pagination.currentPage >= pagination.lastPage ||
      pagination.currentPage === pagination.lastPage - 1) ?
      pagination.lastPage - 5 : firstPaginationPage;

    for (let i = firstPaginationPage; i <= lastPaginationPage; i++) {
      this.activePaginationButtons.push(i);
    }
  }

  /**
   * Emits the page number requested by button.
   *
   * @param buttonValue - value of the pagination button clicked
   */
  onClick(buttonValue) {
    this.paginationPage.emit(buttonValue);
  }
}
