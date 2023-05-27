import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {OperationsComponent} from "./operations/operations.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {HomeComponent} from "./home/home.component";
const routes: Routes = [
  {
    path: "customers", component: CustomersComponent
  },
  {
    path: "accounts", component: AccountsComponent
  },
  {
    path: "new-customer", component: NewCustomerComponent
  },
  {
    path: "new-account", component: NewAccountComponent
  },
  {
    path : "operations", component : OperationsComponent
  },
  {
    path : "home", component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
