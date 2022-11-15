import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                 .email('El formato de email es inválido')
                 .required('El email es requerido'),
        password: Yup.string()
                 .required('El password es requerido')       
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
       <div>
         <h4> Login </h4>
         <Formik
            //*** Initial values that the form will take
            initialValues={initialCredentials}
            //*** Yup Validation Schema ***
            validationSchema = {loginSchema}
           //*** onSubmit Event
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}   
         >

         {/** We obtain prop from Formik */}
         {props => {
            const{
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
            } = props;

            return(
                <Form>
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" placeholder="example@email.com" />

                  <label htmlFor="password">Password</label>
                  <Field id="password" name="password" placeholder="Contraseña" type='password'/>

                  <button type="submit">Login</button>
               </Form>
            )
         }}

         </Formik>

       </div>
    );
}

export default LoginFormik;
