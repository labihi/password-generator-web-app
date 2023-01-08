import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-generate-button',
  templateUrl: './custom-generate-button.component.html',
  styleUrls: ['./custom-generate-button.component.scss']
})
export class CustomGenerateButtonComponent {

  @Output('emitClick') emitClick = new EventEmitter<boolean>();

  @Input () disabled: boolean = false;


  emitClickEvent() {
    this.emitClick.emit(true);
  }
}
