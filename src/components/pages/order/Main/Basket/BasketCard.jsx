import { MdDeleteForever } from 'react-icons/md'
import styled, { css } from "styled-components"
import { theme } from "../../../../theme/index.jsx"
import { formatPrice } from '../../../../../utils/maths.jsx'
import PropTypes from 'prop-types';


export default function BasketCard({ title, price, quantity, imageSource, className, isModeAdmin }) {
    return (
        <BasketCardStyled className={className} isModeAdmin={isModeAdmin}>
            <div className="delete-button">
                <MdDeleteForever className="icon" />
            </div>
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="text-info">
                <div className="left-info">
                    <div className="title">
                        <span>{title}</span>
                    </div>
                    <span className="price">{formatPrice(price)}</span>
                </div>
                <div className="quantity">
                    <span>x {quantity}</span>
                </div>
            </div>
        </BasketCardStyled>
    )
}


BasketCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
    isModeAdmin: PropTypes.bool.isRequired,
}

const BasketCardStyled = styled.div`
    //border: 1px solid red;
    height: 86px;
    padding: 8px 16px;
    display: grid;
    grid-template-columns: 30% 1fr;

    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.cardBasket};

    position: relative;

    .image{
        box-sizing: border-box;
        height: 70px;
        img{
            padding: 5px;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
    
    .text-info{
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 70% 1fr;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.primary};

        .left-info{
            display: grid;
            grid-template-rows: 60% 40%;
            margin-left: 21px;
            
            .title{
                display: flex;
                align-items: center;
                font-family: ${theme.fonts.family.stylish};
                font-size: ${theme.fonts.size.P3};
                line-height: 32px;
                font-weight: ${theme.fonts.weights.bold};
                color: ${theme.colors.dark};
                min-width: 0;
                span{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .price{
                font-size: ${theme.fonts.size.SM};
                font-weight: ${theme.fonts.weights.medium};
                font-family: ${theme.fonts.family.openSans};
            }
        }

        .quantity{
            box-sizing: border-box;
            font-weight: ${theme.fonts.weights.medium};
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 20px;
            font-size: ${theme.fonts.size.SM};
        }
    }

    .delete-button{
        display: none;
        z-index: 1;
    }

    &:hover{
        .delete-button{
            border: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 76px;
            border-top-right-radius: ${theme.borderRadius.round};
            border-bottom-right-radius: ${theme.borderRadius.round};
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${theme.colors.red};
            color: ${theme.colors.white};
            cursor: pointer;

            .icon{
                width: ${theme.fonts.size.P3};
                height: ${theme.fonts.size.P3};
            }

            &:hover{
                .icon{
                    color: ${theme.colors.dark};
                }
                &:active{
                    .icon{
                        color: ${theme.colors.white};
                    }
                }
            }
        }
    }
`