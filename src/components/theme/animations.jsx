import { css, keyframes } from "styled-components";

export const fadeInFromRight = keyframes`
    0% {
        position: absolute;
        z-index: -1;
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const adminAnimation = css`
.admin-appear{
        opacity: 0.1;
        transform: translateY(100%);
        &.admin-appear-active{
            opacity: 1;
            transform: translateY(0);
            transition: all 500ms;
        }
    }`

export const basketAnimation = css`
.product-appear {
        .animation-product {
            transform: translateX(100px);
            opacity: 0%;
        }
    }
    .product-appear-active {
        .animation-product {
            transition: 300ms;
            transform: translateX(0px);
            opacity: 100%;
        }
    }

    .product-enter {
        .animation-product {
            transform: translateX(100px);
            opacity: 0%;
        }
    }
    .product-enter-active {
        .animation-product {
            transition: 300ms;
            transform: translateX(0px);
            opacity: 100%;
        }
    }
    
    .product-exit {
        .animation-product{
            transform: translateX(0px);
            opacity: 100%;
        }
    }
    .product-exit-active {
        .animation-product{
            transform: translateX(-100px);
            opacity: 0%;
            transition: 300ms;
        }
    }`