import React from 'react'
import styled from 'styled-components';
import { theme } from '../theme';

export default function Tab({Icon}) {
    return (
        <TabStyled>
            <div className='icon'>{Icon}</div>
        </TabStyled>
    ) 
}

const TabStyled = styled.button`
    height: 43px;
    padding: 0 22px;

    cursor: pointer;

    position: relative;
    left: 5%;
    top: 1px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};

    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};

    border-radius: 5px 5px 0px 0px;

    :hover {
        border-bottom: 2px solid ${theme.colors.white};
    }

    .icon {
        display: flex;
    }
`;