import styled from "styled-components"
import { theme } from "../../../../theme"
import Total from "./Total"
import { formatPrice } from "../../../../../utils/maths.jsx"
import Footer from "./Footer.jsx"



export default function Basket() {
    return ( 
        <BasketStyled>    
            <Total amountToPay={formatPrice(0)}/>
                <div className="body">Body</div>
            <Footer />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;
    
    .body{
        background: blue;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
        box-shadow: ${theme.shadows.basket};
    }
`