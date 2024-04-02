import OrderContext from "../../../../context/OrderContext.jsx";
import { useContext, useState } from "react";
import  { EMPTY_PRODUCT } from "../../../../enums/product.jsx";
import Form from "./Form.jsx";


export default function AddForm() {
    const {handleAdd} = useContext(OrderContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [ isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event) => { 
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id : crypto.randomUUID(),
        }
        handleAdd(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const newValue = event.target.value
        const name = event.target.name
        setNewProduct({ ...newProduct, [name]: newValue })
    }

    const displaySuccessMessage = () => { 
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000);
    }


    return (
        <Form 
            product={newProduct} 
            onSubmit={handleSubmit} 
            onChange={handleChange} 
            isSubmitted={isSubmitted} 
        />
    )    
}