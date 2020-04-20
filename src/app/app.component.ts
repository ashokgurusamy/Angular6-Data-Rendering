import { Component } from '@angular/core';
import menudata from './sample_data.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns = [
    'name',
    'phone',
    'email',
    'company',
    'date_entry',
    'org_num',
    'address_1',
    'city',
    'zip',
    'geo',
    'pan',
    'pin',
    'id',
    'status',
    'fee',
    'guid',
    'date_exit',
    'date_first',
    'date_recent',
    'url'
  ];
  index = [
    'name',
    'phone',
    'email',
    'company',
    'date_entry',
    'org_num',
    'address_1',
    'city',
    'zip',
    'geo',
    'pan',
    'pin',
    'id',
    'status',
    'fee',
    'guid',
    'date_exit',
    'date_first',
    'date_recent',
    'url'
  ];
  mainmenu: any = menudata;
  totalRec: number;
  page: number = 1;

  constructor(private http: HttpClient) {}
  httpdata;
  rowsPerPage = 10;
  ngOnInit() {}
  postData(data) {
    this.http
      .post('http://jsonplaceholder.typicode.com/users', {
        //Sample API
        id: data.id,
        status: data.status
      })
      .subscribe(response => console.log(data.id, data.status));
  }
}
