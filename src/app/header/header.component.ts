import { APIService } from './../api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  response: any;
  USD: any;
  EUR: any;
  BTC: any;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getInfo().subscribe(data => {
      this.response = data
      this.USD = Number(this.response[0].buy).toFixed(2)
      this.EUR = Number(this.response[1].buy).toFixed(2)
    })
  }

}
