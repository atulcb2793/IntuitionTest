import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/data.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component implements OnInit {
  constructor(private backendServicce: BackendService) {}

  deviceData;
  sortedData;
  searchKey = '';
  sortStateMng = {
    name: 0,
    price: 0,
    type: 0,
  };

  ngOnInit() {
    this.getDeviceData();
  }

  getDeviceData() {
    this.backendServicce.getDeviceData().subscribe((data) => {
      this.deviceData = data.devices;
    });
  }

  sortByOption(header) {
    this.sortStateMng[header] =
      this.sortStateMng[header] === 2 ? 0 : this.sortStateMng[header] + 1;
    if (this.sortStateMng[header] === 1) {
      this.sortAsc(header, [...this.deviceData]);
    } else if (this.sortStateMng[header] === 2) {
      this.sortDsc(header, [...this.deviceData]);
    } else {
      this.deviceData = [...this.deviceData];
      this.sortedData = null;
    }
  }

  sortAsc(column, data) {
    this.sortedData = data.sort((a, b) => {
      a =
        column === 'price'
          ? Number(a[column].substring(1))
          : a[column].toLowerCase();
      b =
        column === 'price'
          ? Number(b[column].substring(1))
          : b[column].toLowerCase();
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }

  sortDsc(column, data) {
    this.sortedData = data.sort((a, b) => {
      a =
        column === 'price'
          ? Number(a[column].substring(1))
          : a[column].toLowerCase();
      b =
        column === 'price'
          ? Number(b[column].substring(1))
          : b[column].toLowerCase();
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
  }
}
