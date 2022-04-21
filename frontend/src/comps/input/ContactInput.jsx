import React from 'react'
import { ErrorMessage } from 'formik'
import { Input } from '../contact/contact.style'
import Error from '../error/Error'
function ContactInput(props) {
    const { label, name, ...rest } = props
  return (
    <div>
        <Input 
        name={name}
        id={name}
        placeholder={label}
        {...rest}
        type='text'
        />
<ErrorMessage name={name} component={Error} />
    </div>
  )
}

export default ContactInput