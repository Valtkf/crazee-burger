import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.jsx"
import { deepClone } from "../utils/array.jsx"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.SMALL)

    const handleAddToBasket = (productToAdd) => { 
        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined
        console.log("isProductAlreadyInBasket: ", isProductAlreadyInBasket);


        if (!isProductAlreadyInBasket){
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }

            const basketUpdated = [newBasketProduct, ...basketCopy]
            setBasket(basketUpdated)
            
        }
    
    }

    return{ basket, handleAddToBasket }
}