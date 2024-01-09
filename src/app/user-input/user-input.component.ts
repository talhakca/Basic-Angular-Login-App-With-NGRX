import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ROLES } from 'src/shared';
import { User } from 'src/shared/models/user';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => UserInputComponent),
      multi: true
    }
  ]
})
export class UserInputComponent implements ControlValueAccessor {

  _value!: User;
  ROLES = ROLES;

  get value() {
    return this._value;
  }

  set value(value: User) {
    this.setLocalValue(value);
    this.onChange(value);
    this.onTouched();
  }

  setLocalValue(value: User) {
    if (!value) {
      this._value = {};
    } else {
      this._value = value;
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: User): void {
    this.setLocalValue(value);
    console.log('hi');

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
