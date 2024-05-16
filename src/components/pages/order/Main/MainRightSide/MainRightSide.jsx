import { useContext } from 'react'
import styled from 'styled-components';
import OrderContext from "../../../../../context/OrderContext.jsx"
import { theme } from '../../../../theme/index.jsx';
import Admin from "../Admin/Admin.jsx"
import Menu from "../Menu/Menu.jsx"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { adminAnimation } from '../../../../theme/animations.jsx';

export default function MainRightSide() {
    const { isModeAdmin } = useContext(OrderContext)

    return (
        <MainRightSideStyled>
            <Menu />
            {isModeAdmin && (
                <TransitionGroup className="transition-group">
                    <CSSTransition appear classNames="admin" timeout={500}>
                        <Admin />
                    </CSSTransition>
                </TransitionGroup>
            )}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    
    ${adminAnimation}
    `;