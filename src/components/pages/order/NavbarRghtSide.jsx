import {Link} from "react-router-dom"
import styled from "styled-components";
export default function NavbarRghtSide({username}) {
    return (
        <NavbarRghtSideStyled className="right-side">
            Right
            <h1>Hey, {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </NavbarRghtSideStyled>
    )
}

const NavbarRghtSideStyled = styled.div`
        background: purple;
`;