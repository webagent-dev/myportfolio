import React from 'react'
import { ErrorMessage } from 'formik'
import { Textarea } from '../contact/contact.style'
import Error from '../error/Error'
function ContactTextarea(props) {
    const { label, name, ...rest } = props
  return (
    <div>
        <Textarea
        name={name}
        id={name}
        placeholder={label}
        as='textarea'
        {...rest}
        />
<ErrorMessage name={name} component={Error} />
    </div>
  )
}

export default ContactTextarea