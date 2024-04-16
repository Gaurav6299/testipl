import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicommonService {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http
      .get('http://192.46.214.33:3000/api/data/getUpcomingMatches')

  }

  getDataUsingSlug(value:any){
    // console.log("val::",value)
    return this.http.get('http://192.46.214.33:3000/api/data/getUpcomingMatches/'+value)
  }
}
