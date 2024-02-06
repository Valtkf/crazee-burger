import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.jsx"
import { theme } from "../../../theme/index.jsx";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)

    return (
        <MenuStyled className="menu">
            {menu.map((produit) => {
                return (
                    <div className="produit">
                        <div className="image">
                            <img src={produit.imageSource} alt={produit.title} />
                        </div>
                        <div className="info-text">
                            <div className="title">{produit.title}</div>
                            <div className="description">
                                <div className="price">{produit.price}</div>
                                <button className="add-button">Ajouter</button>
                            </div>
                        </div>
                    </div>
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
                }
            }
        }
`;