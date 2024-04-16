import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data=new BehaviorSubject([]);
  constructor() { }

  setData(value:any){
    console.log(value)
    this.data.next(value)
  }

  getData(){
    return this.data.asObservable()
  }
}
