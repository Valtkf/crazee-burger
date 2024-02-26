import styled from "styled-components";
import { theme } from "../theme";
import PrimaryButton from "./PrimaryButton";
import { TiDelete } from "react-icons/ti";

export default function Product({ title, imageSource, leftDescription, hasDeleteButton, onDelete }) {
    return ( 
        <CardStyled className="produit">
            {hasDeleteButton && (
                <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
                    <TiDelete className="icon" />
                </button>
            )}
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="info-text">
                <div className="title">{title}</div>
                <div className="description">
                    <div className="left-description">{leftDescription}</div>
                    <div className="right-description">
                        <PrimaryButton className="primary-button" label={"Ajouter"} />
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    
            background: white;
            box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
            width: 200px;
            height: 300px;
            border-radius: ${theme.borderRadius.extraRound};
            display: grid;
            grid-template-rows: 65% 1fr;
            padding: 20px;
            padding-bottom: 10px;
            position: relative;

            .delete-button {
                border: 1px solid red;
                position: absolute;
                top: 15px;
                right: 15px;
                cursor: pointer;
                width: 30px;
                height: 30px;
                color: ${theme.colors.primary};
                z-index: 2;
                padding: 0;
                border: none;
                background: none;
            }

            .icon {
                height: 100%;
                width: 100%;
            }

            :hover {
                color: ${theme.colors.redSecondary};
            }
            :active {
                color: ${theme.colors.primary};
            }

            .image {
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
                display: grid;
                grid-template-rows: 30% 70%;
                padding: 5px;

                .title {
                    margin: auto 0;
                    font-family: "Amatic SC", cursive;
                    font-weight: ${theme.fonts.weights.bold};
                    font-size: ${theme.fonts.size.P4};
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    text-align: left;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .description {
                    display: flex;
                    justify-content: space-between;
                    width: 190px;
                    height: 38.5px;
                    padding-top: 19px;
                    padding-bottom: 19px;

                    .left-description {
                        color: ${theme.colors.primary};
                        font-weight: ${theme.fonts.weights.regular};
                        font-size: 16px;
                        padding: 10px 50px 22px 0px;
                    }

                    .right-description {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;

                        .primary-button {
                            font-size: ${theme.fonts.size.XS};
                            width: 95px;
                            height: 38px;
                            cursor: pointer;
                            
                            &:active {
                                color: white;
                                background-color: #ff9f1b;
                                border: 1px solid #ff9f1b;
                            }
                        }
                    }
                }
            }
`;