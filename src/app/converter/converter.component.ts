import { APIService } from './../api_service/api.service';
import { Component} from '@angular/core';
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
  UAH: number = 0;
  val1 = this.excForm.get('exchenge')
  val2 = this.excForm.get('toExc')
  select = this.excForm.get('firstSelect')
  constructor(private apiService: APIService) {
  }
  ngOnInit() {

    this.excForm.valueChanges.subscribe((value) =>(this.valOne = value.exchange, console.log(value.exchange*1,value.firstSelect,value.toExc*1)));
    

    this.apiService.getInfo().subscribe(data => {
      this.response = data
      this.USD = this.response[0].buy
      this.EUR = this.response[1].buy
      this.BTC = this.response[2].buy
    })
  }
  // setValue(one: number,two: number,three: number){
  //   this.val1?.setValue(two)
  //   this.val2?.setValue(one)
  //   // this.select?.setValue(three)
  // }
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
  messageTwo(two: number) {
    if (this.selOne === 'USD') {
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
