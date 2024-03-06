import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyMenuAdmin({onReset}) {
    return ( 
        <EmptyMenuAdminStyled>
            <div className="empty-menu">
                <h1>Le menu est vide ?</h1>
                <span>Cliquez ci-dessous pour le réinitialiser</span>
                
            </div>
            <button className="primary-button-admin" onClick={onReset}>Générer de nouveaux produits</button>
        </EmptyMenuAdminStyled> 
    )
}

const EmptyMenuAdminStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "Amatic SC", cursive;
        color: ${theme.colors.greyBlue};
        h1{
            font-size: ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.bold};
            text-align: center;
        }

        span{
            font-size: ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.regular};
        }

        .primary-button-admin{
        margin-top: 25px;
        width: 225px;
        height: 50px;
        padding: 18px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 800;
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b;
        cursor: pointer;
        &:hover:not(:disabled) {
            background-color: white;
            color: #ff9f1b;
            border: 1px solid #ff9f1b;
            transition: all 200ms ease-out;
        }

        &:active {
            color: white;
            background-color: #ff9f1b;
            border: 1px solid #ff9f1b;
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }

    
`;