import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
