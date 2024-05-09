import styled, { css } from "styled-components";
import { theme } from "../theme";
import { TiDelete } from "react-icons/ti";
import Button from "./Button";
import PropTypes from 'prop-types';

export default function Card({ 
    title,
    imageSource,
    leftDescription,
    hasDeleteButton,
    onDelete,
    onClick,
    $isHoverable,
    $isSelected,
    onAdd,
}) {
    return ( 
        <CardStyled 
            className="produit" 
            onClick={onClick} 
            $isHoverable={$isHoverable} 
            $isSelected={$isSelected}
        >
            <div className="card" >
                {hasDeleteButton && (
                    <button className="delete-button" aria-label="delete-button" onClick={onDelete} >
                        <TiDelete className="icon" />
                    </button>
                )}
                <div className="image">
                    <img src={imageSource} alt={title} />
                </div>
                <div className="text-info">
                    <div className="title">{title}</div>
                    <div className="description">
                        <div className="left-description">{leftDescription}</div>
                        <div className="right-description">
                            <Button
                                className="primary-button"
                                label={"Ajouter"}
                                onClick={onAdd}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    leftDescription: PropTypes.string.isRequired, 
    hasDeleteButton: PropTypes.bool,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
    onAdd:PropTypes.func,
    $isHoverable: PropTypes.bool,
    $isSelected: PropTypes.bool,
};

const CardStyled = styled.div`
    ${({ $isHoverable, isModeAdmin }) => ($isHoverable || !isModeAdmin) && hoverableStyle}
    border-radius: ${theme.borderRadius.extraRound};

    .card {
        background: white;
        box-sizing: border-box;
        box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
        width: 240px;
        height: 330px;
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

            :hover {
                color: ${theme.colors.redSecondary};
            }
            :active {
                color: ${theme.colors.primary};
            }
        }

        .icon {
            height: 100%;
            width: 100%;
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

        .text-info {
            display: grid;
            grid-template-rows: 30% 70%;
            padding: 5px;

            .title {
                margin: auto 0;
                font-family: "Amatic SC", cursive;
                font-weight: ${theme.fonts.weights.bold};
                font-size: ${theme.fonts.size.P4};
                color: ${theme.colors.dark};
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
                        padding-left: 25px;
                    }
                    :hover {
                        color: ${theme.colors.primary};
                        background-color: ${theme.colors.white};
                        transition: all 200ms ease-out;
                    }
                    :active {
                        background-color: ${theme.colors.primary};
                        color: ${theme.colors.white};
                    }
                }
            }
        }

        ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}
    }
`;

const hoverableStyle = css`
    &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
        box-shadow: ${theme.shadows.orangeHighlight};
        cursor: pointer;
    }
`;

const selectedStyle = css`
    background: ${theme.colors.primary};
    
    .primary-button {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.white};
        transition: all 200ms ease-out;
        &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.white};
            transition: all 200ms ease-out;
        }
        &:active {
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary};
        }
    }

    .delete-button {
        color: ${theme.colors.white};
        :active {
            color: ${theme.colors.white};
        }
    }

    .text-info {
        .description {
            .left-description {
                color: ${theme.colors.white};
        
            }
        }
    }
`;
