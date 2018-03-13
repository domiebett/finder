import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emits event once the button is clicked
   */
  buttonClick() {
    this.click.emit();
  }
}
