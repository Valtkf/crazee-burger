import OrderContext from "../../../../context/OrderContext.jsx";
import { useContext, useState } from "react";
import  { EMPTY_PRODUCT } from "../../../../enums/product.jsx";
import Form from "./Form.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import Button from "../../../reusable-ui/Button.jsx";
import { useSuccessMessage } from "../../../../hooks/useDisplaySuccessMessage.jsx";

export default function AddForm() {
    const {handleAdd} = useContext(OrderContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const {isSubmitted, displaySuccessMessage} = useSuccessMessage()

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

    return (
        <Form 
            product={newProduct} 
            onSubmit={handleSubmit} 
            onChange={handleChange} 
            isSubmitted={isSubmitted}
        >
            <>
                <Button
                    className="submit-button"
                    label={"Ajouter un nouveau produit au menu"}
                    version="success"
                />
                {isSubmitted && <SubmitMessage />}
            </>
        </Form>
    )    
}