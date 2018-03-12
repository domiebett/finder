import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsTableComponent } from '../items-table/items-table.component';

@Component({
  selector: 'app-lost-and-found',
  templateUrl: './lost-and-found.component.html',
  styleUrls: ['./lost-and-found.component.scss']
})
export class LostAndFoundComponent implements OnInit {

  @ViewChild(ItemsTableComponent) itemsTableComponent: ItemsTableComponent;
  sectionToShow = 'found';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.sectionToShow = params['section'];
    });
  }

  ngOnInit() {

  }

  switchSection(section) {
    this.sectionToShow = section;
  }

  /**
   * Fetches pagination page number
   *
   * @param pageNumber - the page number to be fetched
   */
  fetchPaginatedPage(pageNumber) {
    this.itemsTableComponent.getItems(pageNumber);
  }
}
