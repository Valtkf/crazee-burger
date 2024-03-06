import React from 'react'
import styled from 'styled-components';
import { LiaCheckCircleSolid } from "react-icons/lia";
import { theme } from '../../../theme';

export default function SubmitMessage() {
    return (
        <SubmitMessageStyled>
            <LiaCheckCircleSolid className="icon" />
            <span className="message">Ajouté avec succés !</span>
        </SubmitMessageStyled>
    )
}

const SubmitMessageStyled = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        vertical-align: middle;
    }

        .message {
            margin-left: 5px;
            font-size: ${theme.fonts.size.SM};
            font-weight: ${theme.fonts.weights.regular};
            color: ${theme.colors.success};
        }
`