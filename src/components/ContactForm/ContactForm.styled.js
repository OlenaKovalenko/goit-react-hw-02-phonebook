import { Form } from "formik";
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    display: inline-flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};
    margin-bottom: ${p => p.theme.spacing(6)};


`;

export const FormLabel = styled.label`
    text-align: start;
    font-size: 16px;
    color: ${p => p.theme.colors.grey};

`;