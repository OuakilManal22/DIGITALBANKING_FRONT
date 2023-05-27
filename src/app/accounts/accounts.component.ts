import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {AccountDetails} from "../model/accounts.model";
import {Customer} from "../model/customer.model";
import {CustomersService} from "../services/customers.service";
import {AccountsService} from "../services/accounts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit
{

  accounts!: Observable<Array<AccountDetails>>;
  errorMessage!: object;
  formGroup: FormGroup | undefined;
  searchFormGroup : FormGroup | undefined;
  constructor(private http: HttpClient, private accountService:AccountsService, private fb: FormBuilder, private router:Router  ) {
  }
  ngOnInit()
  {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchAccount();
  }



  handleSearchAccount()
  {
    let kw=this.searchFormGroup?.value.keyword;
    this.accounts=this.accountService.serachAccounts(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteAccount(c: AccountDetails)
  {
    confirm("Aru you sure?");
    this.accountService.deleteAccount(c.id).subscribe({
      next: data => alert("Account Deleted Successfully!")
    });
  }

  protected readonly FormGroup = FormGroup;

  redirectToOperations(c: string): void {
    this.router.navigateByUrl("/operations/" + c);
  }
}
