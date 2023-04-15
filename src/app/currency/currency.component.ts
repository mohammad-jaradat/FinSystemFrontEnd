import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency';
import { CurrencyService } from '../services/currency-service.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent  implements OnInit {

  currencies: Currency[] | undefined;

  constructor(private currencyService: CurrencyService) {
  }
  
  ngOnInit() {
    console.log("gggg")
    this.currencyService.findAll().subscribe(
      data => {
        console.log(data);
          this.currencies = data;
        }    
    );
  }


}
