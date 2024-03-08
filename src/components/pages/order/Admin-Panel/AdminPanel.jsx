import styled from 'styled-components';
import { theme } from '../../../theme';
import OrderContext from '../../../../context/OrderContext';
import { useContext } from 'react';
import { getTabSelected, getTabsConfig } from '../Main/Admin/getTabsConfig';

export default function AdminPanel() {
    const { currentTabSelected } = useContext(OrderContext)
    const tabs = getTabsConfig(currentTabSelected)
    const tabSelected = getTabSelected (tabs, currentTabSelected)

    return (
        <AdminPanelStyled>
            {currentTabSelected === tabSelected.index && tabSelected.Content}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    box-sizing: border-box;
    padding:30px 5%;
`;