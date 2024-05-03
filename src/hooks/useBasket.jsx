import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.jsx"
import { deepClone, findObjectById, findIndexById, removeObjectById } from "../utils/array.jsx"
import { setLocalStorage } from "../utils/window.jsx"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    
    const handleAddToBasket = (idProductToAdd, username) => { 
        const basketCopy = deepClone(basket)
        const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

        if(productAlreadyInBasket){
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
            return
        }

        createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
    }

            const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
                const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
                basketCopy[indexOfBasketProductToIncrement].quantity += 1
                setBasket(basketCopy)
                setLocalStorage(username, basketCopy)
            }

            const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket, username) => {
                const newBasketProduct = { id: idProductToAdd, quantity: 1 }
                const newBasket = [newBasketProduct, ...basketCopy]
                setBasket(newBasket)
                setLocalStorage(username, newBasket)
            }

        const handleDeleteBasketProduct = (idBasketProduct) => { 
            const basketCopy = deepClone(basket)

            const basketUpdated = removeObjectById(idBasketProduct, basketCopy)

            setBasket(basketUpdated)
        }    

        return { basket, handleAddToBasket, handleDeleteBasketProduct }
    }