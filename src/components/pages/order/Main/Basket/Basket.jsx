import styled from "styled-components"
import Total from "./Total"
import Footer from "./Footer.jsx"
import EmptyBasket from "./EmptyBasket.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import BasketProducts from "./BasketProducts.jsx";
import { theme } from "../../../../theme/index.jsx"
import { isEmpty } from "../../../../../utils/array.jsx"



export default function Basket() {
    const { basket, menu } = useContext(OrderContext)

    if (menu === undefined) return <span>Chargement ...</span>

    return ( 
        <BasketStyled>    
            <Total />
            {isEmpty(basket) ? (
                <EmptyBasket /> 
            ) : (
                <BasketProducts />
                )}
            <Footer />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    height: 85vh;

    .head{
        position: sticky;
        top: 0;
    }

    .footer{
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        position: sticky;
        bottom: 0;
    }
`