import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../theme";
import Navbar from "./Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";
import { useMenu } from "../../../hooks/useMenu.jsx"
import { useBasket } from "../../../hooks/useBasket.jsx";
import { findObjectById } from "../../../utils/array.jsx";
import { initialiseUserSession } from "./helpers/initialiseUserSession.jsx";


    export default function OrderPage() {
        const { username } = useParams()
        const [isModeAdmin, setIsModeAdmin] = useState(false)
        const [isCollapsed, setIsCollapsed] = useState(false)
        const [isAddSelected, setIsAddSelected] = useState(true)
        const [isEditSelected, setIsEditSelected] = useState(false)
        const [currentTabSelected, setCurrentTabSelected] = useState("add")
        const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
        const titleEditRef = useRef()
        const {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
        const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()
        


        const handleProductSelected = async (idProductClicked) => {
            const productSelected = findObjectById(idProductClicked, menu)
            await setIsCollapsed(false)
            await setCurrentTabSelected("edit")
            await setProductSelected(productSelected)
        titleEditRef.current.focus()
        }

        useEffect(() =>{
            initialiseUserSession(username, setMenu, setBasket)
        }, [setBasket, setMenu, username])
        

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
            handleProductSelected,
            username,
            setBasket,
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