import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  @Input() list: any[];
  @Input() defaultValue: string;

  @Output() changes = new EventEmitter();

  selectedValue = null;
  showDropDownContent = false;
  disabled = false;

  constructor() {
    this.defaultValue = '';
  }

  ngOnInit() { }

  /**
   * Accepts and emits the selected item.
   *
   * @param item
   *
   * return {void}
   */
  setSelectedValue(item) {
    this.showDropDownContent = false;
    this.selectedValue = item;
    this.changes.emit(item);
  }
}
