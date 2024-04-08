import { useContext } from 'react'
import styled from 'styled-components';
import OrderContext from "../../../../../context/OrderContext.jsx"
import { theme } from '../../../../theme/index.jsx';
import Admin from "../Admin/Admin.jsx"
import Menu from "../Menu/Menu.jsx"

export default function MainRightSide() {
    const { isModeAdmin } = useContext(OrderContext)

    return (
        <MainRightSideStyled>
            <Menu />
            {isModeAdmin && <Admin />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    `;
