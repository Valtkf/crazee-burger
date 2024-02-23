import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { useContext, useState } from "react";

export default function AddForm() {
    const {handleAdd} = useContext(OrderContext)
    
    const [title, setTitle] = useState("")
    const [imageSource, setImageSource] = useState("")
    const [price, setPrice] = useState(0)

    const handleSubmit = (event) => { 
        event.preventDefault()

        const newProduct = {
            id : new Date().getMinutes(),
            title: title,
            imageSource: imageSource,
            price: price,
        }

        handleAdd(newProduct)
        
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleImageChange = (event) => {
        setImageSource(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">Aucune image</div>
            <div className="input-fields">
                <input value={title} type="text" placeholder="Nom" onChange={handleTitleChange}/>
                <input value={imageSource} type="text" placeholder="Image URL" onChange={handleImageChange} />
                <input value={price ? price : ""} type="text" placeholder="Prix" onChange={handlePriceChange}/>
            </div>
            <button className="submit-button">Submit Button</button>
        </AddFormStyled>
    )    
}

const AddFormStyled = styled.form`
    border: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        "image-preview   input-fields"
        "image-preview   input-fields"
        "image-preview   input-fields"
        ".               submit-button";

    height: 100%;
    width: 70%;

    .image-preview{
        background: red;
        grid-area: 1 / 1 / 4 / 2;
    }
    .input-fields{
        background: blue;
        grid-area: 1 / 2 / 4 / -2;
        display: grid;
    }
    .submit-button{
        background: green;
        grid-area: 4 / -2 / -1 / -1;
        width: 50%;
    }
`;