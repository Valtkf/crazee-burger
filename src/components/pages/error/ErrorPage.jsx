import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
    
export default function ErrorPage() {
    return (
        <ErrorPageStyled>
            <div className="text-error">
            <h1>404</h1>
            <img src="/../../../../dist/images/F03 logo-orange.png" alt="" />
            <span><p>désolé nous n'avons pas pu trouvé ce que vous cherchez 😭</p> </span>
            </div>
                <Link to="/">
                    <button>Retourner vers la page d'accueil</button>
                </Link>
        </ErrorPageStyled>
    )
}


const ErrorPageStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .text-error {
        margin-top: 50px;
        text-align: center;
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P5};
        color: ${theme.colors.greyBlue};
    }

    span {
        color: ${theme.colors.greyBlue};
    }

    img {
        width: 150px;
    }

    button {
        
        margin-bottom: 50px;
        height: 50px;
        width: 400px;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        font-size: 15px;
        font-weight: 800;
        color: ${theme.colors.white};

        &:hover{
            border: 1px solid ${theme.colors.primary};
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary};
            transition: all 200ms ease-out;
            cursor: pointer;
        }
    }
`