import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValueForm} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sber-test';

  public form: FormGroup;


  constructor(
    public fb: FormBuilder
  ) {
    this.createForm();
  }

  public onSubmit = (searchForm: any) => {
    console.log(searchForm.value);
  };

  private createForm = (form?: ValueForm) => {

    this.form = this.fb.group({
      city    : [form?.city,   Validators.required],
      phone   : [form?.phone,  Validators.required],
    });
  }


}
