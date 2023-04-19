import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @ViewChild('inputvalue') inputElementRef!: ElementRef;

  @Output() inputValueEmitter: EventEmitter<string> = new EventEmitter<string>();

  inputValue: any;
  inputError: boolean = false;
  ipRegex: RegExp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

  handleKeyPressEvent(event: any) {
  }

  isInputValid(): boolean { 
    return (this.ipRegex.test(this.inputValue)); 
  }

  onInputChange(event: any) {
  }

  submit() {
    this.inputValue = this.inputElementRef.nativeElement.value;

    if(this.isInputValid()) {
      this.inputError = false;
      this.inputValueEmitter.emit(this.inputValue);
    } else {
      this.inputError = true;
    }
  }
  

}
