import styled from "styled-components"
import Total from "./Total"
import { formatPrice } from "../../../../../utils/maths.jsx"
import Footer from "./Footer.jsx"
import EmptyBasket from "./EmptyBasket.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import BasketProducts from "./BasketProducts.jsx";



export default function Basket() {
    const {basket} = useContext(OrderContext)

    const isBasketEmpty = basket.length === 0

    return ( 
        <BasketStyled>    
            <Total amountToPay={formatPrice(0)}/>
            {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
            <Footer />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;
`