import {Component, OnInit} from '@angular/core';
import {AccountsComponent} from "../accounts/accounts.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrl: './customer-accounts.component.css'
})
export class CustomerAccountsComponent implements OnInit{
  customerId! : string;
  customer! :Customer;
  constructor(private route : ActivatedRoute, private router : Router) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['id'];
  }

}
