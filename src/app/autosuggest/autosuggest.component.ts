import {Component, forwardRef, OnInit } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {ApiService} from '../app.service';

@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutosuggestComponent),
    multi: true
  }]
})
export class AutosuggestComponent implements OnInit, ControlValueAccessor {

  public cityControl: FormControl;
  public results: any[] = [];


  constructor(private _apiService: ApiService) {
    this.cityControl = new FormControl('', [Validators.required]);
  }

  ngOnInit() {

    this.cityControl.valueChanges.subscribe((value: string) => {
      if(value && value.length > 0 ) {
        this._apiService.search(value).subscribe((result: any) => {

            this.results = result.filter(res => res.name.toLowerCase() !== value.toLowerCase() );
          },
          (error: any) => {
            console.log(error);
            this.results = [];
          });
      }
    });

  }


  public propagateChange: any = () => {};

  public propagateTouched: any = () => {};

  writeValue(obj: any): void {
    this.cityControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  selectValue: any = (value: any) => {
    this.propagateChange(value);
    this.setCityControl(value);
  }

  setCityControl: any = (value) => {
    this.cityControl.setValue(value);
  }
}
