import styled from "styled-components";
import { useState } from "react";
import  TextInput  from "../../../reusable-ui/TextInput.jsx"
import Button from "../../../reusable-ui/Button.jsx";
import ImagePreview from "./ImagePreview.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import { getInputTextsConfig } from "./inputTextConfig.jsx";



export default function AdminForm({ product, onSubmit, onChange }) {
    
    
    const [isSubmitted, setIsSubmitted] = useState(false)


    const displaySuccessMessage = () => { 
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000);
    }

    const inputTexts = getInputTextsConfig(product)

    return (
        <AdminFormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} />
            <div className="input-fields">
                {inputTexts.map((input) => (
                    <TextInput
                        key={input.id}
                        name={input.name}
                        value={input.value}  
                        placeholder={input.placeholder} 
                        onChange={onChange}
                        Icon={input.Icon}
                        version="minimalist"
                    />
                ))}
                
            </div>
            <div className="submit">
                <Button 
                    className="submit-button"
                    label={"Ajouter un nouveau produit au menu"}
                    version="success"
                />
                {isSubmitted && <SubmitMessage />}
            </div>
        </AdminFormStyled>
    )    
}

const AdminFormStyled = styled.form`
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