import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  str="";
  num=0;
  constructor(private number:NumberService,private string:StringService){}
  ngOnInit() {
      this.str=this.number.Chkprime(49);
      this.num=this.string.CountCapital("Marvellous Infosystems");
  }
  /* 1)here we have implemented oninit interface inside of class child component and declared it in the imports .
      2)we have injected number service(this service has one function named chckprime which tells us the entered number is prime or not )
      3)we have injected string service(this service has one function named countcaptial which tells us how many capital letters are present in the string)
      3)we have ngoninit lifecycle hook in which we call checkprime method from number service and count capital from stringservice and store it in the variable
      4)we display data inside these variable in child component through string interpolation and we render this child component in parent(app) component
      */

}
