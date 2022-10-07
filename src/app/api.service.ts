import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

  
export class APIService {
  response:any;
  public USD : any;
  EUR: any;
  BTC: any;
  UAH: any;
  constructor(private http: HttpClient) { }

  ngOnInit(){}
  getInfo(){return this.http.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")}
  
}
