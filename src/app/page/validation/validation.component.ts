import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

  // myForm = new FormGroup({
  //   name : new FormControl(),
  //   age  : new FormControl()
  // });

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      name: [ '', Validators.required ],
      age: '',
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
    });
  }






}
