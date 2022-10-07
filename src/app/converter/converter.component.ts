import { APIService } from './../api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {
  valOne = 0;
  valTwo = 0;
  selOne = 'USD';
  response: any;
  USD: any;
  EUR: any;
  BTC: any;
  UAH: any;

  constructor(private apiService: APIService) {
  }
  getResp() {
  }

  ngOnInit() {
    this.apiService.getInfo().subscribe(data => {
      this.response = data
      this.USD = Number(this.response[0].buy).toFixed(2)
      this.EUR = Number(this.response[1].buy).toFixed(2)
      this.BTC = Number(this.response[2].buy)
    })
  }

  setVal(val: string) {
    this.selOne = val
  }

  messageOne(one: number) {
    console.log(this.selOne)
    if (this.selOne === 'USD') {
      this.valTwo = one / this.USD;
    }
    if (this.selOne === 'EUR') {
      this.valTwo = (one / this.EUR);
    }
    if (this.selOne === 'BTC') {
      this.valTwo = (one / this.BTC);
    }
  }
  messageTwo(two: number) {if (this.selOne === 'USD') {
    this.valOne = two * this.USD;
  }
  if (this.selOne === 'EUR') {
    this.valOne = two * this.EUR
  }
  if (this.selOne === 'BTC') {
    this.valOne = two * this.BTC
  }
  }


}
