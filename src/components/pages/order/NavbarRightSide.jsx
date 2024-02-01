import styled from "styled-components";
import Profile from "./Profile";
export default function NavbarRghtSide({username}) {
    return (
        <NavbarRghtSideStyled className="right-side">
            {/*<div className="admin-button">Admin button</div>*/}
            <Profile username={username}/>
        </NavbarRghtSideStyled>
    )
}

const NavbarRghtSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    /*.admin-button {
        background: lightblue;
    }*/

    .profile {
        background: yellow;
    }
`;