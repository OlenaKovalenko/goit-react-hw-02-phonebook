import { Form } from "formik";
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    display: inline-flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};

`;