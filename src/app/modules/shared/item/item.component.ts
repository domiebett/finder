import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() itemLayout = 'classic';
  reporter;

  constructor() { }

  ngOnInit() {
    this.reporter = this.item.owner ? this.item.owner : this.item.finder;
  }
}
