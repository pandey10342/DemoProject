import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
 
//dummy url 

  apiUrl="https://api.publicapis.org/entries?category=animals&https=true"

  getApiData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
