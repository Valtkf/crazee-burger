import styled from "styled-components";

export default function Menu() {
    return (
        <MenuStyled className="menu">Menu
            <div className="card">Card</div>
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
        background: brown;

        .card {
        background: green;
        width: 240px;
        height: 330px;
        margin-top: 50px;
        margin-left: 50px;
    }
`;