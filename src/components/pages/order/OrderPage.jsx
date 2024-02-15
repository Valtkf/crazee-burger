import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../theme";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";


    export default function OrderPage() {
        const [isModeAdmin, setIsModeAdmin] = useState(true)
        const { username } = useParams()

        const orderContextValue = {
            isModeAdmin,
            setIsModeAdmin
        }
        return (
            <OrderContext.Provider value={orderContextValue}>
                <OrderPageStyled>
                    <div className="container">
                    <Navbar />
                    <Main />
                    </div>
                </OrderPageStyled>
            </OrderContext.Provider>
        )
    }

    const OrderPageStyled = styled.div`
        background: ${theme.colors.primary};
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .container{
            height: 95vh;
            width: 1400px;
            display: flex;
            flex-direction: column;
            border-radius: ${theme.borderRadius.extraRound};
        }
    `;