import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

  @Output() click = new EventEmitter();
  @Input() disabled = false;
  @Input() toolTipText;
  @Input() tilted = false;

  constructor() { }

  ngOnInit() { }

  /**
   * Emits event once the button is clicked
   */
  buttonClick() {
    this.click.emit();
  }
}
