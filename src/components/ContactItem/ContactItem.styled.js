import styled from 'styled-components';


export const ContactLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 0 auto;
    gap: ${p => p.theme.spacing(1)};
    margin-top: ${p => p.theme.spacing(6)};

`;

export const ContactName = styled.p`
    color: ${p => p.theme.colors.blue};
    font-size: 18px;
    font-weight: 400;

`;

export const BtnDelete = styled.button`
    padding: ${p => p.theme.spacing(1)};
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};

    &:hover{
        background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.black};
    }

`;