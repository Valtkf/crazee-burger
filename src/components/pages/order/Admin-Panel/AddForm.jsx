import styled from "styled-components";

export default function AddForm() {
    return (
        <AddFormStyled>
            <div className="image-preview">ImagePreview</div>
            <div className="input-fields">
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Image URL" />
                <input type="text" placeholder="Prix" />
            </div>
            <button className="submit-button">Submit Button</button>
        </AddFormStyled>
    )    
}

const AddFormStyled = styled.form`
    border: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        "image-preview   input-fields"
        "image-preview   input-fields"
        "image-preview   input-fields"
        ".               submit-button";

    height: 100%;
    width: 70%;

    .image-preview{
        background: red;
        grid-area: 1 / 1 / 4 / 2;
    }
    .input-fields{
        background: blue;
        grid-area: 1 / 2 / 4 / -2;
        display: grid;
    }
    .submit-button{
        background: green;
        grid-area: 4 / -2 / -1 / -1;
        width: 50%;
    }
`;