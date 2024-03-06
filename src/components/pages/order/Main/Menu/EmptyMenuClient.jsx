import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyMenuClient() {
    return (
        <EmptyMenuClientStyled>
            <div>
                <h1>Victime de notre succès ! :D</h1>
                <span>De nouvelles recettes sont en cours de préparation.</span>
                <span>A très vite !</span>
            </div>
        </EmptyMenuClientStyled>
    )
}

const EmptyMenuClientStyled = styled.div `
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
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.regular};
            margin-bottom: 25px;
        }
`