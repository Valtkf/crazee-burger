import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
    return (
        <MainStyled className="main">
            <div className="mainLeftSide">MainLeftSide</div>
            <div className="mainRightSide"> MainRightSide
                <div className="card">Card</div>
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
    grid-template-columns: 25% 1fr;

    .mainLeftSide {
        background: pink;
    }

    .mainRightSide{
        background: brown;
    }

    .card {
        background: green;
        width: 240px;
        height: 330px;
        margin-top: 50px;
        margin-left: 50px;
    }

    
`;