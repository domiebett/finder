import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  @Output() click = new EventEmitter();
  @Input() disabled = false;
  @Input() toolTipText;

  constructor() { }

  ngOnInit() {
    console.log(this.disabled);
  }

  /**
   * Emits event once the button is clicked
   */
  buttonClick() {
    this.click.emit();
  }
}
