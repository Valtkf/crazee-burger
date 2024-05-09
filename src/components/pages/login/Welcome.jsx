import styled from 'styled-components';
import { theme } from '../../theme';

export default function Welcome() {
    return (
        <WelcomeStyled>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        </WelcomeStyled>
    )
}

const  WelcomeStyled = styled.div`
    hr {
        border: 1.5px solid ${theme.colors.loginLine};
        margin-bottom: ${theme.gridUnit * 5}pax;
    }

    h1 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P4};
    }
`;