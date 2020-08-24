import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  baseUrl: string = `https://restcountries.eu/rest/v2/name/`;

  constructor(private http: HttpClient) { }

  search(queryString: string) {
    const url = this.baseUrl + queryString;
    return this.http.get(url);
  }

}
