import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index.jsx";
import Card from "../../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../enums/product.jsx";
import { isEmpty } from "../../../../../utils/array.jsx";
import Loader from "./Loader.jsx";


export default function Menu() {
    const {
        username,
        menu, 
        isModeAdmin, 
        handleDelete, 
        resetMenu, 
        productSelected, 
        setProductSelected,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected,
    } = useContext(OrderContext)
    
    const handleClick = (idProductClicked) => {
        if(!isModeAdmin) return
        handleProductSelected(idProductClicked)
    }

    const handleCardDelete = (event, idProductToDelete) => {
        event.stopPropagation()
        handleDelete(idProductToDelete, username)
        handleDeleteBasketProduct(idProductToDelete)
        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
    }

    const handleAddButton = (event, idProductToAdd) => {
        event.stopPropagation()
        handleAddToBasket(idProductToAdd, username)
    }

    if (menu === undefined) return <Loader/>

    if (isEmpty(menu)) {
        if (!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
    }

    return (
        <MenuStyled className="menu">
            {menu.map(({id , title, imageSource, price }) => {
                return (
                    <Card
                        key={id}
                        title={title} 
                        imageSource={imageSource ? imageSource : IMAGE_COMING_SOON} 
                        leftDescription={formatPrice(price)}
                        hasDeleteButton={isModeAdmin}
                        onDelete={(event) => handleCardDelete(event, id)}
                        onClick={() => handleClick(id)}
                        $isHoverable={isModeAdmin}
                        $isSelected={checkIfProductIsClicked(id, productSelected.id)}
                        onAdd={(event) => handleAddButton(event, id)}
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
    grid-row-gap: 60px;
    padding: 50px 50px 280px;
    justify-items: center;
    overflow-y: scroll;
`;