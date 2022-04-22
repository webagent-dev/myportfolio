import React from 'react'
import { Textarea } from '../contact/contact.style'
import { ErrorMessage } from 'formik'
import Error from '../error/Error'
function ContactTextarea(props) {
  const { label, name, ...rest } = props
  return (
    <>
      <Textarea
       name={name}
       placeholder={label}
       as='textarea'
       {...rest}
       id={name}
      />
<ErrorMessage name={name} component={Error} />
    </>
  )
}

export default ContactTextarea