import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './ContactForm.styled';

// const schema = Yup.object().shape({
//     name: Yup.string().required('Required'),
//     number: Yup.number().required('Required'),
// });

export const ContactForm =({ onAdd }) => (
        <Formik
            initialValues={{
            name: '',
            number: '',
            }}
            
            // validationSchema={schema}

            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
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
);