import styled from "styled-components";
import { theme } from "../../../theme";

export default function Product({ title, imageSource, price }) {
    return ( 
        <ProductStyled className="produit">
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="info-text">
                <div className="title">{title}</div>
                <div className="description">
                    <div className="price">{price}</div>
                    <button className="add-button">Ajouter</button>
                </div>
            </div>
        </ProductStyled>
    )
}

const ProductStyled = styled.div`
    
            background: green;
            width: 200px;
            height: 300px;
            border-radius: ${theme.borderRadius.extraRound};
            display: grid;
            grid-template-rows: 65% 1fr;
            padding: 20px;
            padding-bottom: 10px;
            
            

            .image {
                border: 1px solid pink;
                width: 100%;
                height: auto;
                margin-top: 30px;
                

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .info-text {
                border: 1px solid pink;
            }
        
`;