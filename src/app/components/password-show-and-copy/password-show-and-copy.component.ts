import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password-show-and-copy',
  templateUrl: './password-show-and-copy.component.html',
  styleUrls: ['./password-show-and-copy.component.scss']
})
export class PasswordShowAndCopyComponent {

  @Input('generatedPassword') generatedPassword: string = '';


  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedPassword);
  }
}
