import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.jsx"
import { deepClone, findObjectById, findIndexById, removeObjectById } from "../utils/array.jsx"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    
    const handleAddToBasket = (idProductToAdd) => { 
        const basketCopy = deepClone(basket)
        const productAlreadyInBasket = findObjectById(idProductToAdd)

        if(productAlreadyInBasket){
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
            return
        }

        createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
    }

            const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
                const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
                basketCopy[indexOfBasketProductToIncrement].quantity += 1
                setBasket(basketCopy)
            }

            const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
                const newBasketProduct = { id: idProductToAdd, quantity: 1 }
                const newBasket = [newBasketProduct, ...basketCopy]
            
                setBasket(newBasket)
            }

        const handleDeleteBasketProduct = (idBasketProduct) => { 
            const basketCopy = deepClone(basket)

            const basketUpdated = removeObjectById(idBasketProduct, basketCopy)

            setBasket(basketUpdated)
        }    

        return { basket, handleAddToBasket, handleDeleteBasketProduct }
    }