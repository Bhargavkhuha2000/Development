import * as Yup from 'yup';

export const signUpShema = Yup.object({
  Name: Yup.string().min(2).required('please enter your name'),
  Email: Yup.string().email().required('please enter your email'),
  UserName: Yup.string().required('please enter Your user name'),
  Balance: Yup.number().required('please enter Your Account Balance'),
  Password: Yup.string().min(6).required('please enter your password'),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('Password'), null, 'password must match']),
});
