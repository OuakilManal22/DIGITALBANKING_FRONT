import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDetails} from "../model/accounts.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient)
  {

  }
  public getAccounts():Observable<Array<AccountDetails>>
  {
    return this.http.get<Array<AccountDetails>>("http://localhost:8085/accounts");

  }

  public serachAccounts(keyword: string):Observable<Array<AccountDetails>>
  {
    return this.http.get<Array<AccountDetails>>("http://localhost:8085/accounts/"+keyword);
  }

  public saveAccount(account:AccountDetails):Observable<AccountDetails>
  {
    return this.http.post<AccountDetails>("http://localhost:8085/accounts", account);
  }

  public deleteAccount(id: string)
  {
    return this.http.delete("http://localhost:8085/accounts/"+id);

  }
}
