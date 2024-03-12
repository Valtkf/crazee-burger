import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index.jsx";
import Card from "../../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
    
    const {menu, isModeAdmin, handleDelete, resetMenu, productSelected, setProductSelected} = useContext(OrderContext)

    if (menu.length === 0) {
        if (!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={resetMenu} />
    }
    
    const handleClick = (idProductClicked) => {
        const productSelected = menu.find((product) => product.id === idProductClicked)
        setProductSelected(productSelected);
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
                        onDelete={() => handleDelete(id)}
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
`;