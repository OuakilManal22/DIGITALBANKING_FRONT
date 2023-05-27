import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../model/customer.model";
import {CustomersService} from "../services/customers.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit
{
  newFormGroup!: FormGroup;
  constructor(private fb: FormBuilder, private customerService: CustomersService) {
  }
  ngOnInit(): void
  {
    this.newFormGroup = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email: this.fb.control(null, [Validators.email, Validators.required])
    })

  }

  handleSaveCustomer()
  {
    let customer:Customer = this.newFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe(
      {
        next: data => {
          alert("Customer Saved Successfully!");
        }
      }
    );
  }
}
