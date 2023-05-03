import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public Chkprime(num:any)
  {  
    let iCnt :number =0;
    
    let flag :Boolean = false;
    for ( iCnt = 2; iCnt <= num / 2; ++iCnt) {
      // condition for nonprime number
      if (num % iCnt == 0) {
        flag = true;
        break;
      }
    }

    if (!flag)
    return "Number is prime number "
    else
    return "Number is not prime number "
    //this is a funtion which accepts one number and tells where that number is prime or not
  }
}
