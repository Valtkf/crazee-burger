import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index.jsx";
import Card from "../../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import { EMPTY_PRODUCT } from "../../../../../enums/product.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
    const {
        menu, 
        isModeAdmin, 
        handleDelete, 
        resetMenu, 
        productSelected, 
        setProductSelected,
        setIsCollapsed,
        setCurrentTabSelected,
        titleEditRef,
    } = useContext(OrderContext)
    
    const handleClick = async (idProductClicked) => {
        if(!isModeAdmin) return

        await setIsCollapsed(false)
        await setCurrentTabSelected("edit")
        const productSelected = menu.find((product) => product.id === idProductClicked)
        await setProductSelected(productSelected)
        titleEditRef.current.focus()
    }

    if (menu.length === 0) {
        if (!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={resetMenu} />
    }

    const handleCardDelete = (event, idProductToDelete) => {
        event.stopPropagation()
        handleDelete(idProductToDelete)
        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
        titleEditRef.current.focus()
    }

    return (
        <MenuStyled className="menu">
            {menu.map(({id , title, imageSource, price }) => {
                return (
                    <Card
                        key={id}
                        title={title} 
                        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT} 
                        leftDescription={formatPrice(price)}
                        hasDeleteButton={isModeAdmin}
                        onDelete={(event) => handleCardDelete(event, id)}
                        onClick={() => handleClick(id)}
                        isHoverable={isModeAdmin}
                        isSelected={checkIfProductIsClicked(id, productSelected.id)}
                    />
                )
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%) inset;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
`;