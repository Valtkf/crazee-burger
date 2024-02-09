import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from 'react-toastify';
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";


export default function NavbarRghtSide({username}) {
    const [isModeAdmin, setIsModeAdmin] = useState(false)

    const popUp = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setIsModeAdmin(!isModeAdmin)
    }


    return (
        <NavbarRghtSideStyled className="right-side">
            <ToggleButton 
                labelIfUnchecked="ACTIVER LE MODE ADMIN" 
                labelIfChecked="DESACTIVER LE MODE ADMIN"
                onToggle={popUp}
            />
            <Profile username={username} />
            <ToastAdmin />
        </NavbarRghtSideStyled>
    )
}

const NavbarRghtSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;