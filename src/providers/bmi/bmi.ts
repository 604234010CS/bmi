import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BmiProvider {

  bmiCalculate(height:number,weight:number){
    return (weight / height) / height;
  }

}
