import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-container',
  templateUrl: './global-container.component.html',
  styleUrls: ['./global-container.component.scss']
})
export class GlobalContainerComponent implements OnInit{

  uppercase: string = '';
  lowercase: string = '';
  numbers: string = '';
  symbols: string = '';

  passwordLength: string = '';

  Allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*",
  };

  textBarValue: string = '';

  totalOptions = 0;
  generatedPassword: string = "";



  constructor() {
  }

  ngOnInit() {
  }



  generateAll() {
    console.log(length);
    length = parseInt(this.passwordLength);

    const options = {
      uppercase: this.uppercase,
      lowercase: this.lowercase,
      numbers: this.numbers,
      symbols: this.symbols,
    };

    this.generatePassword({ length, ...options });
    this.generateSecurityBar(options, length);
  }

  private generatePassword(
    options: {
      uppercase: string;
      lowercase: string;
      length: number;
      numbers: string;
      symbols: string
    }) {

    let pwd = "";

    for (let i = 0; i < options.length; i++) {
      if (
        options.lowercase &&
        options.uppercase &&
        options.numbers &&
        options.symbols
      )
        pwd += this.getRandomCharFromString(Object.values(this.Allowed).join(""));
      else {
        // Destructure the Allowed object in order to get the allowed characters
        const { Uppers, Lowers, Numbers, Symbols } = this.Allowed;
        let allowedChars = "";
        // Add the allowed characters to the allowedChars string
        if (options.uppercase) allowedChars += Uppers;
        if (options.lowercase) allowedChars += Lowers;
        if (options.numbers) allowedChars += Numbers;
        if (options.symbols) allowedChars += Symbols;
        // Add a random character from the allowedChars string to the password
        pwd += this.getRandomCharFromString(allowedChars);
      }
    }

    this.generatedPassword = pwd;
  }

  private getRandomCharFromString(str: string) {
    return str.charAt(Math.floor(Math.random() * str.length));
  }

  private generateSecurityBar(
    options: {
      uppercase: string;
      lowercase: string;
      numbers: string;
      symbols: string
    }, length: number) {
    console.log(options);

    this.totalOptions = 0;

    //  Get the total number of enabled options
    this.updateTotalOptions();

    console.log("TOTOPT: ",this.totalOptions);

    //  Add the style to the bar
    switch (this.totalOptions) {
      case 1:
        this.textBarValue = 'TOO WEAK!';
        break;
      case 2:
        this.textBarValue = 'WEAK';
        break;
      case 3:
        this.textBarValue = 'MEDIUM';
        break;
      case 4:
        this.textBarValue = 'STRONG';
        break;
      default:
        this.textBarValue = 'TOO WEAK!';
        break;
    }
  }


  shouldDisableGenerateButton() {
    return this.totalOptions === 0 || this.passwordLength === '' || this.passwordLength === '0';
  }

  updateTotalOptions() {
    this.totalOptions = 0;
    if(this.uppercase) this.totalOptions++;
    if(this.lowercase) this.totalOptions++;
    if(this.numbers) this.totalOptions++;
    if(this.symbols) this.totalOptions++;
  }

  onEmit($event: string) {
    console.log("PW LENGTH: ", $event);
    this.passwordLength = $event;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedPassword);
  }
}
