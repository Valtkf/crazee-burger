import styled, { css } from "styled-components";
import { theme } from "../theme";

export default function Button({ label, Icon, className, version = "normal", onClick }) {
    return (
        <ButtonStyled className={className} version={version} onClick={onClick}>
            <span>{label}</span>
            <div className="icon">{Icon && Icon}</div>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
${(props) => props.version === "normal" && extraStylePrimery};
${(props) => props.version === "success" && extraStyleSuccess};
${({version})=> extraStyle[version] }
`;

const extraStylePrimery = css`
        width: 100%;
        border: 1px solid red;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        line-height: 1;

        padding: 18px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 800;
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b;

        &:hover:not(:disabled) {
            background-color: white;
            color: #ff9f1b;
            border: 1px solid #ff9f1b;
            transition: all 200ms ease-out;
        }

        &:active {
            color: white;
            background-color: #ff9f1b;
            border: 1px solid #ff9f1b;
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
        }
`

const extraStyleSuccess = css`
        width: 100%;
        width: 275px;
        height: 35px;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        text-decoration: none;
        

        padding: 18px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 800;
        color: white;
        background-color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};

        &:hover:not(:disabled) {
            background-color: ${theme.colors.white};
            color: ${theme.colors.success};
            border: 1px solid ${theme.colors.success};
            transition: all 200ms ease-out;
        }

        &:active {
            color: white;
            background-color: ${theme.colors.success};
            border: 1px solid ${theme.colors.success};
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
        }
`

const extraStyle = {
    primary: extraStylePrimery,
    success: extraStyleSuccess,
}