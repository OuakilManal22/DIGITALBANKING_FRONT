import {Customer} from "./customer.model";

export interface AccountDetails {
  id:            string;
  balance:              number;
  createdAt :            Date;
  type:                  string;
  accountOperationDTOS: AccountOperation[];
}

export interface AccountOperation {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}
