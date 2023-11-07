import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './ContactForm.styled';

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required!'),
    number: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
        message: 'Invalid Phone Number!',
        excludeEmptyString: false,
    })
    .required('Phone number is required!')
    .max(15, 'Invalid phone number!'),
});

export const ContactForm =({ onAdd }) => (
        <Formik
            initialValues={{
            name: '',
            number: '',
            }}
            
            validationSchema={validationSchema}

            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
        }}
        >
            <StyledForm>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name"  placeholder="John Smith" />
                <ErrorMessage name="name" component="div" />

                <label htmlFor="number">Number</label>
                <Field type="tel" name="number" placeholder="+XX..." />
                <ErrorMessage name="number" component="div" />
            
                
                <button type="submit">Add contact</button>
            </StyledForm>
        </Formik>
);