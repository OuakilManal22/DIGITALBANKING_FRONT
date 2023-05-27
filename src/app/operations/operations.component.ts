import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDetails, AccountOperation} from "../model/accounts.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit{

  operations: any
  accountId!: number

  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute) {
    this.accountId = route.snapshot.params['accountId'];

  }
  ngOnInit(): void
  {
    this.http.get("http://localhost:8085/operations").subscribe(
      data => {
        this.operations = data;
      }
    );
  }

}
