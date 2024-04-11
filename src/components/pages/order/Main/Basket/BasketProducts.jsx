import React from "react"
import styled from "styled-components"
import BasketCard from "./BasketCard"


export default function BasketProducts({ basket, index }) {
    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) => (
                <BasketCard key={index} {...basketProduct} />
            ))}
        </BasketProductsStyled>
        )
}

const BasketProductsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;
        :first-child {
            margin-top: 20px;
        }
        :last-child {
            margin-bottom: 20px;
        }
    }
`