import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-password-length-slider',
  templateUrl: './password-length-slider.component.html',
  styleUrls: ['./password-length-slider.component.scss']
})
export class PasswordLengthSliderComponent {

  @Output('emitPasswordLength') emitPasswordLength = new EventEmitter<string>();
  passwordLength = "0";

  changePasswordLength($event: Event) {
    this.passwordLength = ($event.target as HTMLInputElement).value;
    this.emitPasswordLength?.emit(this.passwordLength);
  }

}
