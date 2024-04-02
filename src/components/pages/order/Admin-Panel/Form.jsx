import styled from "styled-components";
import  TextInput  from "../../../reusable-ui/TextInput.jsx"
import Button from "../../../reusable-ui/Button.jsx";
import ImagePreview from "./ImagePreview.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import { getInputTextsConfig } from "./inputTextConfig.jsx";
import PropTypes from 'prop-types';


export default function Form({ product, onSubmit, onChange, isSubmitted }) {

    const inputTexts = getInputTextsConfig(product)

    return (
        <FormStyled onSubmit={onSubmit}>
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
        </FormStyled>
    )    
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isSubmitted: PropTypes.bool.isRequired,
    product: PropTypes.shape({
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
    }).isRequired
};

const FormStyled = styled.form`
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