import styled from 'styled-components';
import { theme } from '../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';

export default function AdminPanel() {
    const { isAddSelected, isEditSelected, } = useContext(OrderContext)

    return (
        <AdminPanelStyled className='panel-admin'>
            {isAddSelected && "Ajouter un produit"}
            {isEditSelected && "Modifier un produit"}
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;