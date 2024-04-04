import styled from "styled-components"
import { theme } from "../../../theme"



export default function Basket() {
    return ( 
        <BasketStyled>
            <div className="head">Head</div>
            <div className="body">Body</div>
            <div className="footer">Footer</div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;
    
    .head{
        height: 70px;
        background: ${theme.colors.background_dark};
        color: ${theme.colors.primary};
    }
    .body{
        background: blue;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
    }
    .footer{
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.background_dark};
        color: ${theme.colors.primary};
    }
`