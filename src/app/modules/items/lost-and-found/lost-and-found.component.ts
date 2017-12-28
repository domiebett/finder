import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lost-and-found',
  templateUrl: './lost-and-found.component.html',
  styleUrls: ['./lost-and-found.component.scss']
})
export class LostAndFoundComponent implements OnInit {

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

}
