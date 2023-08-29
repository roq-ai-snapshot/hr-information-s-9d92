import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  termination_date: yup.date().nullable(),
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
