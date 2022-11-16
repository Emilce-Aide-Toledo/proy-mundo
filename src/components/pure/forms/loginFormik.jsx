import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
              // We Save The data in the localStorage
              await localStorage.setItem('credentials', values)
            }}   
         >

         {/** We obtain prop from Formik */}
         {({ values,
             touched,
             errors,
             isSubmitting,
             handleChange,
             handleBlur, }) => (
                <Form>
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" placeholder="example@email.com" />
                  
                    {/**Email errors */}
                   {
                     errors.email && touched.email &&
                     (
                        <ErrorMessage name="email" component='div'/>
                     ) 
                   }

                  <label htmlFor="password">Password</label>
                  <Field id="password" name="password" placeholder="Contraseña" type='password'/>

                  {/**Password errors */}
                  {
                     errors.password && touched.password &&
                     (
                        <ErrorMessage name="password" component='div' />
                     ) 
                   }

                  <button type="submit">Login</button>
                  {isSubmitting ? (<p>Login your credentials... </p>) : null}
               </Form>
         )}

         </Formik>

       </div>
    );
}

export default LoginFormik;
