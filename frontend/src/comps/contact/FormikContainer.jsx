import React from 'react'
import { Formik } from 'formik'
import {   FormControl, First, Second, Submit } from './contact.style'
import * as yap from 'yup'
import FormikControl from '../formik/FormikControl'

function FormikContainer() {
    const initialValues = {
        email: '',
        name: '',
        subject: '',
        text: ''
      
    }
    const onSubmit = (value, submitProps) => {
        console.log('input value', value)
        submitProps.resetForm()
    }

        const validateSchema = yap.object({
            email: yap.string().email('please enter a valid email').required('field can not be empty'),
            name: yap.string().required(' name is required'),
            subject: yap.string().required('please enter a valid value'),
            text: yap.string().required('field can not be empty')
    })

  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateSchema={validateSchema}
    >
        {
            props => (  
                <FormControl>
                     <First>
                       <FormikControl 
            control='input'
                type='text'
               name='name'
              label='name'
               id='name'
         />
               <FormikControl 
            control='input'
                type='email'
               name='email'
              label='email'
               id='email'
         />
               <FormikControl 
            control='input'
                type='text'
               name='subject'
              label='subject'
               id='subject'
         />
                     </First>
                      <Second>
                           <FormikControl 
            control='textarea'
                type='textarea'
               name='text'
              label='message'
         />
                            <Submit type='submit' >Send</Submit>
                      </Second>
                </FormControl>
    )
        }

    </Formik>
  )
}

export default FormikContainer


  //         <FormControl>
    //     <First>
    //          <FormikControl 
    //           control='input'
    //             type='text'
    //             name='name'
    //             label='name'
    //             id='name'
    //          />
    //          <FormikControl 
    //             control='input'
    //             type='email'
    //             name='email'
    //             label='email'
    //             id='email'
    //          />
    //          <FormikControl 
    //           control='input'
    //             type='text'
    //             name='subject'
    //             label='subject'
    //             id='subject'
    //          />
    //     </First>
    //     <Second>
    //        <FormikControl
    //              control='textarea'
    //             type='textarea'
    //             name='text'
    //             label='message'
    //             id='text'
    //            />
    //         <Submit type='submit' >Send</Submit>
    //     </Second>
    // </FormControl>