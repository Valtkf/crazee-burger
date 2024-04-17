import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../theme";
import Navbar from "./Navbar/Navbar";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";
import { useMenu } from "../../../hooks/useMenu.jsx"
import { useBasket } from "../../../hooks/useBasket.jsx";


    export default function OrderPage() {
        const { username } = useParams()
        const [isModeAdmin, setIsModeAdmin] = useState(false)
        const [isCollapsed, setIsCollapsed] = useState(false)
        const [isAddSelected, setIsAddSelected] = useState(true)
        const [isEditSelected, setIsEditSelected] = useState(false)
        const [currentTabSelected, setCurrentTabSelected] = useState("add")
        const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
        const titleEditRef = useRef()
        const {menu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
        const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()


        const orderContextValue = {
            isModeAdmin,
            setIsModeAdmin,
            isCollapsed,
            setIsCollapsed,
            isAddSelected,
            setIsAddSelected,
            isEditSelected,
            setIsEditSelected,
            currentTabSelected, 
            setCurrentTabSelected,
            menu,
            handleAdd,
            handleDelete,
            resetMenu,
            productSelected,
            setProductSelected,
            handleEdit,
            titleEditRef,
            basket,
            handleAddToBasket,
            handleDeleteBasketProduct,
        }
        
        return (
            <OrderContext.Provider value={orderContextValue}>
                <OrderPageStyled>
                    <div className="container">
                    <Navbar username={username}/>
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