import { Component, OnInit } from '@angular/core';
import { ApicommonService } from '../apicommon.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: any[] = [];
  allListData: any;
  matchesObj: any[] = [];
  slugDataList: any[] = [];
  slugOutputList: any[] = [];
  ipl2024list: any[] = [];
  slwList: any[] = [];
  isTabsClick: boolean = false;
  isIplActivate:boolean=false;

  constructor(
    private api: ApicommonService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.matchesObj = [];
    this.slugDataList = [];
    this.allListData = [];
    this.slugOutputList = [];
    this.api.getAllData().subscribe(
      (res: any) => {
        // console.log('REs i:::', res);
        this.allListData = res;
        this.tabs = res.data.tabs;

        for (const [key, value] of Object.entries(
          this.allListData.data.matches
        )) {
          // console.log('Key is:::', key, 'Value is:::', value);
          var data: any = value;
          var tempList: any[] = [];
          for (const [key1, value1] of Object.entries(data)) {
            // var slugdata: any = [];
            // console.log('Key1::', key1 + '   value iss ', value1);
            var tempData: any = value1;
            tempList.push({
              key: key1,
              value: value1,
            });
            // console.log('tempLIst::', tempList);
          }
          this.matchesObj.push({
            key: key,
            value: tempList,
          });
        }
      },
      (err) => {},
      () => {
        this.matchesObj.forEach((ele: any) => {
          ele.value.forEach((val: any) => {
            // this.slugDataList = [];
            // console.log('key', val.key);
            var key = val.key;
            var valueList = val.value;
            // console.log('ValueList:::', valueList);

            this.api.getDataUsingSlug(valueList[0].event_slug).subscribe(
              (res: any) => {
                this.slugDataList = [];
                // console.log('Sluusssss::::::', res);
                res.data.forEach((ele: any) => {
                  this.slugDataList.push(ele);
                });
              },
              (err) => {},
              () => {
                this.slugOutputList.push({
                  key: key,
                  value: this.slugDataList,
                });
                // console.log('slugoutlist:::', this.slugOutputList);
              }
            );
          });
        });
      }
    );
    if (this.ipl2024list.length == 0) {
      this.router.navigate(['home']);
    }
  }

  /**
   * Filter Data
   */
  filterData(event_name: any) {
    console.log(event_name)
    if (event_name == 'All') {
      // this.isIplActivate=false;
      this.isTabsClick = false;
      this.router.navigate(['home']);
      return;
    }
    else if (event_name=='SL-W vs SA-W' || event_name=='IPL 2024') {
      this.isTabsClick = true;
      this.ipl2024list = [];
      this.slwList = [];
      this.matchesObj.forEach((ele: any) => {
        ele.value.forEach((val: any) => {
          if (val.key == 'Ipl') {
            this.ipl2024list.push({
              key: ele.key,
              value: val,
            });
          }
          if (val.key == 'South Africa Women Vs Sri Lanka Women') {
            this.slwList.push({
              key: ele.key,
              value: val,
            });
          }
        });
      });
      // console.log('iplLIst', this.ipl2024list);
      if (event_name == 'IPL 2024') {
        this.data.setData(this.ipl2024list);
        this.router.navigate(['home/ipl-2024'], {
          state: { data: this.ipl2024list },
        });
      } else if (event_name == 'SL-W vs SA-W') {
        this.data.setData(this.slwList);
        this.router.navigate(['home/slw'], {
          state: { data: this.slwList },
        });
      }
    }
    else{
      this.router.navigate(['home'])
      this.ngOnInit()
    }

  }
}
