import { useContext } from "react"
import styled from "styled-components"
import BasketCard from "./BasketCard"
import { IMAGE_COMING_SOON } from "../../../../../enums/product"
import { findObjectById } from "../../../../../utils/array"
import OrderContext from "../../../../../context/OrderContext"
import { checkIfProductIsClicked } from "../Menu/helper"



export default function BasketProducts() {
    const { 
        username,
        basket,
        isModeAdmin,
        handleDeleteBasketProduct, 
        menu,
        handleProductSelected,
        productSelected,
    } = useContext(OrderContext)

    const handleOnDelete = (event, id) => {
        event.stopPropagation()
        handleDeleteBasketProduct(id, username)
    }

    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) => {
                const menuProduct = findObjectById(basketProduct.id, menu)
                return (
                    <div className="basket-card" key={basketProduct.id} >
                        <BasketCard 
                            {...(menuProduct || {})} 
                            imageSource={menuProduct ? (menuProduct.imageSource || IMAGE_COMING_SOON) : IMAGE_COMING_SOON}
                            quantity={basketProduct.quantity}
                            title={menuProduct ? menuProduct.title : ""}
                            price={menuProduct ? parseFloat(menuProduct.price) : 0}
                            $isClickable={isModeAdmin}
                            onDelete={(event)=> handleOnDelete(event, basketProduct.id)}
                            onClick={isModeAdmin ? () => handleProductSelected (basketProduct.id) : null}
                            $isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                        />
                    </div>
                )
            })}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        margin: 20px 16px;
        height: 86px;
        box-sizing: border-box;

        :first-child {
            //margin-top: 20px;
            
        }
        :last-child {
            //margin-bottom: 20px;
        }
    }
`