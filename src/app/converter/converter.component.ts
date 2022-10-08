import { APIService } from './../api_service/api.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
// implements OnInit 
export class ConverterComponent {
  excForm: FormGroup = new FormGroup({
    exchange: new FormControl(),
    toExc: new FormControl(),
    firstSelect: new FormControl(),
  })
  valOne: number = 0;
  valTwo: number = 0;
  selOne: string = '';
  response: any;
  USD: number = 0;
  EUR: number = 0;
  BTC: number = 0;
  constructor(private apiService: APIService) {
  }
  ngOnInit() {
    this.apiService.getInfo().subscribe(data => {
      this.response = data
      this.USD = this.response[0].buy
      this.EUR = this.response[1].buy
      this.BTC = this.response[2].buy
    })
  }
  setVal() {
    const toExcVal = this.excForm.get('exchange')!.value
    const selVal = this.excForm.get('firstSelect')!.value
    const secondVal = this.excForm.get('toExc')!.value

    if (selVal === "USD") {
      let res = toExcVal * this.USD;
      this.excForm.patchValue({ toExc: res })
    }

    if (selVal === "EUR") {
      let res = toExcVal * this.EUR;
      this.excForm.patchValue({ toExc: res })
    }

    if (selVal === "BTC") {
      let res = toExcVal * this.BTC;
      this.excForm.patchValue({ toExc: res })
    }
  }


}
