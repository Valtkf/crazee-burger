import styled from "styled-components";
import { theme } from "../theme";

export default function TextInput({ value, onChange, Icon, className, ...extraProps }) {
    return (
        <InputStyled className={className}>
            <div className="icon">{Icon && Icon}</div>
            <input value={value} onChange={onChange} type="text" {...extraProps} />
        </InputStyled>    )
}

const InputStyled = styled.div`
    
        background-color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;
        

        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fonts.size.P0};
            margin-left: 10px;
            margin-right: 8px;
            color: ${theme.colors.greySemiDark};
        }

        input{
            border: none;
            font-size: ${theme.fonts.size.P0};
            color: ${theme.colors.dark};
            width: 100%;

            &::placeholder{
            background-color: ${theme.colors.white};
            color: ${theme.colors.greyMedium};
        }
        }
`;