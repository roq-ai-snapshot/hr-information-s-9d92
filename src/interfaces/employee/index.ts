import { PayrollInterface } from 'interfaces/payroll';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  hire_date: any;
  termination_date?: any;
  position: string;
  salary: number;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    payroll?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  user_id?: string;
  company_id?: string;
}
