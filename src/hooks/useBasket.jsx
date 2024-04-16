import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.jsx"
import { deepClone, filter, find, findIndex } from "../utils/array.jsx"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (productToAdd) => { 
        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined
            if(!isProductAlreadyInBasket) {
                createNewProductInBasket(productToAdd, basketCopy, setBasket)
                return
            }

                incrementProductAlreadyInBasket(productToAdd, basketCopy)
            } 

            const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
                const indexOfBasketProductToIncrement = findIndex(productToAdd.id, basketCopy)
                basketCopy[indexOfBasketProductToIncrement].quantity += 1
                setBasket(basketCopy)
            }

            const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
                const newBasketProduct = {
                    ...productToAdd,
                    quantity: 1,
                }
                const basketUpdated = [newBasketProduct, ...basketCopy]
                setBasket(basketUpdated)
            }

            const handleDeleteBasketProduct = (idBasketProduct) => {
                const basketCopy = deepClone(basket)

                const basketUpdated = filter(idBasketProduct, basketCopy)
                setBasket(basketUpdated)
            }

        return { basket, handleAddToBasket, handleDeleteBasketProduct }
    }

    
