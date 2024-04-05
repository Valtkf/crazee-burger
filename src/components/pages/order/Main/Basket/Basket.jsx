import styled from "styled-components"
import { theme } from "../../../../theme"
import Header from "../../../../reusable-ui/Header"



export default function Basket() {
    return ( 
        <BasketStyled>
            <Header>Head</Header>
            <div className="body">Body</div>
            <Header>Footer</Header>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;
    
    .body{
        background: blue;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
        box-shadow: ${theme.shadows.basket};
    }
`