import { Field, Form } from "formik";
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    display: inline-flex;
    flex-direction: column;
    width: 300px;
    gap: ${p => p.theme.spacing(2)};
    margin-bottom: ${p => p.theme.spacing(6)};
`;

export const FormLabel = styled.label`
    text-align: start;
    font-size: 16px;
    font-weight: 400;
    color: ${p => p.theme.colors.grey};

`;

export const StyledField = styled(Field)`
    padding: ${p => p.theme.spacing(1)};
    border: 1px solid ${p => p.theme.colors.blue};
    border-radius: ${p => p.theme.radii.md};
    font-size: 18px;
    font-weight: 400;
`;

export const BtnAddContact = styled.button`
    width: 180px;
    margin-bottom: ${p => p.theme.spacing(20)};
    padding: ${p => p.theme.spacing(2)};
    background-color: ${p => p.theme.colors.green};
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.lg};
    border: 4px solid ${p => p.theme.colors.green};
    margin: 0 auto;
    font-size: 18px;
    font-weight: 400;

    &:hover{
        border: 4px solid ${p => p.theme.colors.darkGreen};
        color: ${p => p.theme.colors.darkGreen};
        font-weight: 600;
    }

`;