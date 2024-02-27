import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../theme";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu.jsx";

    export default function OrderPage() {
        const { username } = useParams()
        const [isModeAdmin, setIsModeAdmin] = useState(true)
        const [isCollapsed, setIsCollapsed] = useState(true)
        const [isAddSelected, setIsAddSelected] = useState(true)
        const [isEditSelected, setIsEditSelected] = useState(false)
        const [currentTabSelected, setCurrentTabSelected] = useState("add")
        const [menu, setMenu] = useState(fakeMenu.SMALL)


        const handleAdd = (newProduct) => {
            const menuCopy = [...menu]
    
            const menuUpdated = [newProduct,...menuCopy]
    
            setMenu(menuUpdated)
        }
    
        const handleDelete = (idOfProductToDelete) => { 
            const menuCopy = [...menu]
            const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
    
            setMenu(menuUpdated)
        }

        const resetMenu = () => { 
            setMenu(fakeMenu.SMALL)
        }

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