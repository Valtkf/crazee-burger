import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";



export default function NavbarRghtSide({username}) {
    return (
        <NavbarRghtSideStyled className="right-side">
            <ToggleButton />
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