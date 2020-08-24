import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValueForm} from './app.model';
import {ApiService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sber-test';

  public form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private _apiService: ApiService
  ) {
    const form = this._apiService.getFormOnLocalStorage();
    this.createForm(form);
  }

  public onSubmit = (searchForm: any) => {
    console.log(searchForm.value);
    this._apiService.setFormOnLocalStorage(searchForm.value);
  };

  public clear() {
    this._apiService.clearLocalStorage();
    this.form.reset();
  }

  private createForm = (form?: ValueForm) => {
    this.form = this.fb.group({
      city    : [form?.city,   Validators.required],
      phone   : [form?.phone,  [Validators.pattern(/^\d{1}\(\d{3}\)-\d{3}-\d{2}-\d{2}/), Validators.required]],
    });
  };

  get phone() {
    return this.form.get('phone') as FormControl;
  }


}
