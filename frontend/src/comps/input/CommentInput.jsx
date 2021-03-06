import React from 'react'
import { ErrorMessage } from 'formik'
import { Input  } from '../project/project'
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
        />
<ErrorMessage name={name} component={Error} />
    </div>
  )
}

export default ContactInput