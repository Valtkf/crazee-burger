import styled from "styled-components"



export default function Basket() {
    return ( 
        <BasketStyled>
            <div className="head">Head</div>
            <div className="body">Body</div>
            <div className="footer">Footer</div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;

    .head{
        background: red;
        height: 10%;
    }
    .body{
        background: blue;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer{
        background: green;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`