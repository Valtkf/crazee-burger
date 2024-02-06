import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.jsx"
import { theme } from "../../../theme/index.jsx";
import Product from "./Product"



export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)

    return (
        <MenuStyled className="menu">
            {menu.map((produit) => {
                return <Product title={produit.title} imageSource={produit.imageSource} price={produit.price} />
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

    .produit {
            background: green;
            width: 240px;
            height: 330px;
            border-radius: ${theme.borderRadius.extraRound};
            
            

            .image {
                border: 1px solid pink;
                width: 100px;
                height: auto;
                

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .description {
                border: 1px solid pink;
            }
        }
`;