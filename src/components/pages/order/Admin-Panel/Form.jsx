import React from "react";
import styled from "styled-components";
import  TextInput  from "../../../reusable-ui/TextInput.jsx"
import ImagePreview from "./ImagePreview.jsx";
import { getInputTextsConfig } from "./inputTextConfig.jsx";
import PropTypes from 'prop-types';


const Form = React.forwardRef(function Form({ product, onSubmit, onChange, children, onFocus, onBlur }, ref) {

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
                        onFocus={onFocus}
                        onBlur={onBlur}
                        ref={ref && input.name === "title" ? ref : null}
                    />
                ))}
            </div>
            <div className="form-footer">{children}</div>
        </FormStyled>
    )    
})

export default Form 

Form.propTypes = {
    children: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    isSubmitted: PropTypes.bool,
    product: PropTypes.shape({
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
    .form-footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        
        .submit-button{
            width: 100%;
            cursor: pointer;
        }
        
    }
`;