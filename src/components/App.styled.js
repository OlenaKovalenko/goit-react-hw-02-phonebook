import styled from 'styled-components';


export const AppContainer = styled.div`
    width: 600px;
    margin: 0 auto;
    padding: ${p => p.theme.spacing(6)};
    background-color: ${p => p.theme.colors.lightBlue};
    border-radius: ${p => p.theme.radii.lg};
    border: 1px solid ${p => p.theme.colors.blue};
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
        text-align: center;

`;