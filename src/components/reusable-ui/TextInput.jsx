import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../theme";

const TextInput = React.forwardRef(({ value, onChange, Icon, className, version="normal", ...extraProps }, ref) => {
    return (
        <TextInputStyled className={className} version={version}>
            <div className="icon">{Icon && Icon}</div>
            <input className="input-style" ref={ref} value={value} onChange={onChange} type="text" {...extraProps} />
        </TextInputStyled>    
    )
})

export default TextInput
const TextInputStyled = styled.div`
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;

        .icon{
            font-size: ${theme.fonts.size.P0};
            margin: 0 13px 0 8px;
            color: ${theme.colors.greyBlue};
            display: flex;
        }

        input{
            border: none;
            font-size: ${theme.fonts.size.P0};
            color: ${theme.colors.dark};
            width: 100%;
            

            &::placeholder{
            background-color: ${theme.colors.background_white};
            color: ${theme.colors.greyMedium};
        }
        }

        ${({version}) => extraStyle[version]}
`;

const extraNormalStyle = css`
    background-color: ${theme.colors.white};
    padding: 18px 28px;
    color: ${theme.colors.greySemiDark};

    input {
        color: ${theme.colors.dark};

        &::placeholder {
            background: ${theme.colors.white};
        }

        &:focus {
            outline: 0;
        }
    }
`

const extraMinimalistStyle = css`
    background: ${theme.colors.background_white};
    padding: 8px 16px 8px 24px;
    width: 645px;
    

    input{
            color: ${theme.colors.dark};
            background-color: ${theme.colors.background_white};
            
            &:focus{
            outline: 0;
        }
        }
`

const extraStyle = {
    normal: extraNormalStyle,
    minimalist: extraMinimalistStyle
}