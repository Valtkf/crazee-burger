import { useContext } from "react"
import styled from "styled-components"
import BasketCard from "./BasketCard"
import { IMAGE_COMING_SOON } from "../../../../../enums/product"
import { findObjectById } from "../../../../../utils/array"
import OrderContext from "../../../../../context/OrderContext"
import { checkIfProductIsClicked } from "../Menu/helper"
import { CSSTransition, TransitionGroup } from "react-transition-group"




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
            <TransitionGroup>
                {basket.map((basketProduct) => {
                    const menuProduct = findObjectById(basketProduct.id, menu)
                    return (
                        <CSSTransition
                            appear={true}
                            classNames={"product"}
                            key={basketProduct.id}
                            timeout={500}
                        >
                            <div className="basket-card">
                                <BasketCard
                                    {...menuProduct}
                                    imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON}
                                    quantity={basketProduct.quantity}
                                    title={menuProduct ? menuProduct.title : ""}
                                    price={menuProduct ? parseFloat(menuProduct.price) : 0}
                                    $isClickable={isModeAdmin}
                                    onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                                    onClick={isModeAdmin ? () => handleProductSelected (basketProduct.id) : null}
                                    $isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                                    className={"animation-product"}
                                />
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .product-appear {
        .animation-product {
            transform: translateX(100px);
            opacity: 0%;
        }
    }
    .product-appear-active {
        .animation-product {
            transition: 0.5s;
            transform: translateX(0px);
            opacity: 100%;
        }
    }

    .product-enter {
        .animation-product {
            transform: translateX(100px);
            opacity: 0%;
        }
    }
    .product-enter-active {
        .animation-product {
            transition: 0.5s;
            transform: translateX(0px);
            opacity: 100%;
        }
    }
    
    .product-exit {
        .animation-product{
            transform: translateX(0px);
            opacity: 100%;
        }
    }
    .product-exit-active {
        .animation-product{
            transform: translateX(-100px);
            opacity: 0%;
            transition: 0.5s;
        }
    }

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