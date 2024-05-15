import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { calculateTotalToPay, formatPrice } from "../../../../../utils/maths";
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function Total() {

    const { basket, menu } = useContext(OrderContext)
    const totalToPay = calculateTotalToPay(basket, menu)

    return (
        <Header>
            <TotalStyled>
                {/* <span className="total">Total</span> */}
                <CasinoEffect count={formatPrice(totalToPay)}/>
            </TotalStyled>
        </Header>
    )    
}

const TotalStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 2px;
`;