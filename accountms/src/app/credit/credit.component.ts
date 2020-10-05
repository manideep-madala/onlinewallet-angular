import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // amount: string = '1';

  // setValue() {
  //   this.amount = ' ';
  // }



    // public onTap() {
    //     let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //             "amount" : this.amount
    //         }
    //     };
    //     this.router.navigate(["app-debit"], navigationExtras);
    // }
  }



