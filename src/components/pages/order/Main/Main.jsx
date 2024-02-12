import styled from "styled-components";
import { theme } from "../../../theme";
import Menu from "./Menu";

export default function Main() {
    return (
        <MainStyled className="main">
            {/*<div className="basket">Basket</div>*/}
            <Menu />
            <div className="adminPanel">Admin Pannel
                <div className="adminTabs">Admin Tabs
                    <button className='open-reduce'>open reduce</button>
                    <button className="add-product">Add Product</button>
                    <button className="modify-product">Modify Product</button>
                </div>
                <div className="adminPanelProduct">Admin Panel Product</div>
            </div>    
        </MainStyled>
    )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    flex: 1;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;

    display: grid;
    grid-template-columns: 1fr;

    overflow-y: scroll;
    /*.basket {
        background: pink;
    }*/

    .adminPanel {
        border: 1px solid red;
        height: 294.5px;
        width: 1400px;
    }

    .adminTabs {
        border: 1px solid blue;
        width: 1400px;
        height: 44px;
    }

    .adminPanelProduct {
        border: 1px solid green;
        width: 1400px;
        height: 250px;
    }

`;