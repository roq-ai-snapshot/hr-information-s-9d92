import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  pay_date: any;
  gross_pay: number;
  net_pay: number;
  deductions: number;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
}
