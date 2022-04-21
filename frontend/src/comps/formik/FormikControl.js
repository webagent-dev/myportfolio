import CommentInput from '../input/CommentInput'
import CommentTextarea from '../input/CommentTextarea'
import ContactInput from '../input/ContactInput'
import ContactTextarea from '../input/ContactTextarea'
const FormikControl = (control, ...rest) => {
    switch(control){
        case 'input':
            return <ContactInput {...rest} />
        case 'textarea': 
            return <ContactTextarea {...rest} />
        case 'name': 
        return <CommentInput {...rest} />
        case 'comment':
            return <CommentTextarea  {...rest} />
        default : return null
    }
}


export default FormikControl