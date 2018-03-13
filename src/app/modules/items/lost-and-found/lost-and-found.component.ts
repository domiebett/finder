import { AlertService } from './../../../services/alert.service';
import { AuthService } from './../../../services/auth.service';
import { ModalService } from './../../../services/modal.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsTableComponent } from '../items-table/items-table.component';

@Component({
  selector: 'app-lost-and-found',
  templateUrl: './lost-and-found.component.html',
  styleUrls: ['./lost-and-found.component.scss']
})
export class LostAndFoundComponent implements OnInit {

  @ViewChild(ItemsTableComponent) itemsTableComponent: ItemsTableComponent;
  sectionToShow = 'found';
  currentUser;
  subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.sectionToShow = params['section'];
      this.checkSectionValidity(this.sectionToShow);
    });
    this.currentUser = this.authService.currentUser;
    this.subscription = authService.currentUserChange
      .subscribe((user) => {
        this.currentUser = user;
      });
  }

  ngOnInit() {

  }

  switchSection(section) {
    this.sectionToShow = section;
    this.checkSectionValidity(this.sectionToShow);
  }

  /**
   * Check if the section being navigated to is a valid section
   */
  checkSectionValidity(section) {
    if (section !== 'lost' && section !== 'found') {
      this.router.navigate(['/error/404']);
    }
  }

  /**
   * Fetches pagination page number
   *
   * @param pageNumber - the page number to be fetched
   */
  fetchPaginatedPage(pageNumber) {
    this.itemsTableComponent.getItems(pageNumber);
  }

  /**
   * Opens the add lost item modal
   */
  openAddItemModal() {
    this.modalService.openAddItemModal();
  }

  /**
   * Pop up alert regarding the necessity of logging in
   * before adding an item
  */
  popUpLoginRequiredAlert() {
    this.alertService.popUpAlert(
      'You must be logged in to add an item',
      'warning');
  }
}
