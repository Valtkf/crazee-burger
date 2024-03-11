import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig.jsx";
import { EMPTY_PRODUCT } from "../../../../enums/product.jsx";
import TextInput from "../../../reusable-ui/TextInput";


export default function EditForm() {
    const { productSelected } = useContext(OrderContext)
    const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT)

    const inputTexts = getInputTextsConfig(productSelected)

    const handleChange = (event) => { 
        const {name, value} = event.target
        setProductBeingEdited({
            ...productBeingEdited,
            [name]: value,
        })
    }

    return (
        <EditFormStyled >
            <ImagePreview imageSource={productSelected.imageSource} title={productBeingEdited.title} />
            <div className="input-fields">
                {inputTexts.map((input) => (
                    <TextInput 
                        name={input.name}
                        value={input.value}  
                        placeholder={input.placeholder} 
                        onChange={handleChange}
                        Icon={input.Icon}
                        version="minimalist"
                    />
                ))}
                
            </div>
            <div className="submit"></div>
        </EditFormStyled>
    )
}

const EditFormStyled = styled.form`
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
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    
    .input-fields{
        grid-area: 1 / 2 / 4 / -2;
        display: grid;
        grid-row-gap: 8px;
    }
    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        
        .submit-button{
            width: 50%;
            cursor: pointer;
        }
        
    }
`;