import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-slw',
  templateUrl: './slw.component.html',
  styleUrls: ['./slw.component.scss']
})
export class SlwComponent implements OnInit {

  slwList:any;
  constructor(private router:Router,private data:DataService) {
    this.slwList=router.getCurrentNavigation()?.extras?.state?.['data'];
    //  console.log("value s::",this.slwList)
     data.getData().subscribe((res: any) => {
      this.slwList = res;
    });
  }

  ngOnInit(): void {
  }

}
