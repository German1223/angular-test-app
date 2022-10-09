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
    uahExc: new FormControl(),
    secondToExc: new FormControl(),
    secondSelect: new FormControl(),

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
    const firstVal = this.excForm.get('exchange')!.value
    const selValOne = this.excForm.get('firstSelect')!.value

    const secondVal = this.excForm.get('uahExc')!.value
    const selValTwo = this.excForm.get('secondSelect')!.value
    

    if (selValOne === "USD") {
      let res = firstVal * this.USD;
      this.excForm.patchValue({ toExc: res })
    }

    if (selValOne === "EUR") {
      let res = firstVal * this.EUR;
      this.excForm.patchValue({ toExc: res })
    }

    if (selValOne === "BTC") {
      let res = firstVal * this.BTC;
      this.excForm.patchValue({ toExc: res })
    }

    //second form

    if (selValTwo === "USD") {
      let res = secondVal / this.USD;
      this.excForm.patchValue({ secondToExc: res })
    }

    if (selValTwo === "EUR") {
      let res = secondVal / this.EUR;
      this.excForm.patchValue({ secondToExc: res })
    }

    if (selValTwo === "BTC") {
      let res = secondVal / this.BTC;
      this.excForm.patchValue({ secondToExc: res })
    }
    
  }


}
