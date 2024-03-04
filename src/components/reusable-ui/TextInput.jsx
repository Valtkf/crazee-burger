import styled, { css } from "styled-components";
import { theme } from "../theme";

export default function TextInput({ value, onChange, Icon, className, version="normal", ...extraProps }) {
    return (
        <TextInputStyled className={className} version={version}>
            <div className="icon">{Icon && Icon}</div>
            <input className="input-style" value={value} onChange={onChange} type="text" {...extraProps} />
        </TextInputStyled>    )
}

const TextInputStyled = styled.div`
        //background-color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;
        padding: 18px 24px;
        

        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fonts.size.P0};
            margin: 0 8px 0 10px;
            color: ${theme.colors.greySemiDark};
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

        ${(props) => {
            if (props.version === "normal") return extraNormalStyle
            if (props.version === "minimalist") return extraMinimalistStyle
        }}
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
    width: 645px;
    height: 35px;
    padding: 8px 16px 8px 24px;

    input{
            color: ${theme.colors.dark};
            background-color: ${theme.colors.background_white};
            
            &:focus{
            outline: 0;
        }
        }
`