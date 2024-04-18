import styled from "styled-components"
import Total from "./Total"
import { formatPrice } from "../../../../../utils/maths.jsx"
import Footer from "./Footer.jsx"
import EmptyBasket from "./EmptyBasket.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import BasketProducts from "./BasketProducts.jsx";
import { theme } from "../../../../theme/index.jsx"
import { isEmpty } from "../../../../../utils/array.jsx"



export default function Basket() {
    const { basket, isModeAdmin, handleDeleteBasketProduct } = useContext(OrderContext)

    const isBasketEmpty = isEmpty(basket);

    const totalToPay = basket.reduce((total, basketProduct) => {
        total += basketProduct.price * basketProduct.quantity
        return total
    }, 0)

    return ( 
        <BasketStyled>    
            <Total amountToPay={formatPrice(totalToPay)}/>
            {isBasketEmpty ? (
                <EmptyBasket /> 
            ) : (
                <BasketProducts 
                    basket={basket} 
                    isModeAdmin={isModeAdmin} 
                    handleDeleteBasketProduct={handleDeleteBasketProduct}
                    />
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