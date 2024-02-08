import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.jsx"
import { theme } from "../../../theme/index.jsx";
import Card from "../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../utils/maths.jsx"



export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)

    return (
        <MenuStyled className="menu">
            {menu.map(({id , title, imageSource, price }) => {
                return (
                    <Card
                        key={id}
                        title={title} 
                        imageSource={imageSource} 
                        leftDescription={formatPrice(price)} 
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
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
`;