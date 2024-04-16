import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ipl2024',
  templateUrl: './ipl2024.component.html',
  styleUrls: ['./ipl2024.component.scss'],
})
export class Ipl2024Component implements OnInit {
  ipl2024list: any;
  constructor(private router: Router, private data: DataService) {
    this.ipl2024list = router.getCurrentNavigation()?.extras?.state?.['data'];
    // console.log('value s::', this.ipl2024list);
    data.getData().subscribe((res: any) => {
      this.ipl2024list = res;
      // console.log(this.ipl2024list)
    });
  }

  ngOnInit(): void {}
}
