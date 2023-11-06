import { Formik, Field } from 'formik';
import { StyledForm } from './ContactForm.styled';

export const ContactForm =({ onAdd }) => (
    <div>
        <Formik
            initialValues={{
            name: '',
            number: '',
            }}
            
            onSubmit={values => {
                onAdd(values);
                console.log(values);
        }}
        >
            <StyledForm>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" required />

                <label htmlFor="number">Number</label>
                <Field type="tel" name="number" required />
                
                <button type="submit">Add contact</button>
            </StyledForm>
        </Formik>
    </div>
);