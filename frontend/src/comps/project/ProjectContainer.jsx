import React,{ useState } from 'react'
import { Formik } from 'formik'
import *as  yap from 'yup'
import FormikControl from '../formik/FormikControl'
import FileBase64 from 'react-file-base64'
import { Container, FormControl,  Label, MyComment,Submit,Header } from '../project/project'
import { Bounce } from 'react-reveal'


function ProjectContainer() {
        const [image, setImage ] = useState('')
    const initialValues = {
        name: '',
        comment: '',
    }
    const onSubmit = (value, submitProps) => {
        console.log('input value', value)
        submitProps.resetForm()
    }
    const validateSchema = yap.object({
            name: yap.string().required(' name is required'),
            comment: yap.string().required('field can not be empty')
    })

  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateSchema={validateSchema}
    >
        {
            props =>     <Container>
                  <Bounce>
            <Header>{'Comment  On This Project'}</Header>
              <FormControl>
              <Label htmlFor='name'>Full Name</Label>
              <FormikControl
              control='name'
              type='text'
              name='name'
              id='name'
            label='name'
              />
           <Label htmlFor='commit'>Your Opinion</Label>
              <FormikControl 
              control='comment'
              as='textarea'
              name='comment'
              id='comment'
                label='say your mind'
              />
                   <Label>Your Image</Label>
              <FileBase64 
                multiple={false}
                onDone={({base64}) => setImage(base64)}
              />
              <Submit type='submit'> Commit </Submit>
         </FormControl>
            <MyComment>Thanks for your comment </MyComment>
                   </Bounce>
          </Container>
      
        }
      </Formik>
  )
}

export default ProjectContainer