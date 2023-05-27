import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomersService} from "../services/customers.service";
import {Customer} from "../model/customer.model";
import {catchError, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit
{

  customers!: Observable<Array<Customer>>;
  errorMessage!: object;
  formGroup: FormGroup | undefined;
  searchFormGroup : FormGroup | undefined;
  constructor(private customerService:CustomersService, private fb: FormBuilder) {
  }
  ngOnInit()
  {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchCustomer();
    }
  handleSearchCustomer()
  {
    let kw=this.searchFormGroup?.value.keyword;
    this.customers=this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
  handleDeleteCustomer(c: Customer)
  {
    confirm("Aru you sure?");
    this.customerService.deleteCustomer(c.id).subscribe({
      next: data => alert("Customer Deleted Successfully!")
    });
  }

}
