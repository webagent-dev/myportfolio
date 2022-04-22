import React from 'react'
import { Input } from '../contact/contact.style'
import { ErrorMessage } from 'formik'
import Error from '../error/Error'
function ContactInput(props) {
  const { name, label, ...rest} = props
  return (
    <>
      <Input
      name={name}
      placeholder={label}
      id={name}
      {...rest}
       />
       <ErrorMessage name={name} component={Error} />
      </>
  )
}

export default ContactInput

