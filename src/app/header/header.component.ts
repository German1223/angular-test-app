import { APIService } from '../api_service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  response: any;
  USD: number = 0;
  EUR: number = 0;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getInfo().subscribe(data => {
      this.response = data
      this.USD = this.response[0].buy
      this.EUR = this.response[1].buy
    })
  }

}
