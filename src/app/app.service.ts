import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ValueForm} from './app.model';

@Injectable()
export class ApiService {

  baseUrl: string = `https://restcountries.eu/rest/v2/name/`;

  constructor(private http: HttpClient) { }

  search(queryString: string) {
    const url = this.baseUrl + queryString;
    return this.http.get(url);
  }

  setFormOnLocalStorage(form: ValueForm) {
      localStorage.setItem('form', JSON.stringify(form));
  }

  getFormOnLocalStorage(): ValueForm  {
    return JSON.parse(localStorage.getItem('form'));
  }

  clearLocalStorage(){
    localStorage.clear();
  }

}
