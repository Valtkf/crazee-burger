import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { useContext, useState } from "react";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import  TextInput  from "../../../reusable-ui/TextInput"
import { theme } from "../../../theme/index.jsx";
import Button from "../../../reusable-ui/Button.jsx";



const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: "",
}

export default function AddForm() {
    const {handleAdd} = useContext(OrderContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event) => { 
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id : crypto.randomUUID,
        }
        handleAdd(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const newValue = event.target.value
        const name = event.target.name
        setNewProduct({ ...newProduct, [name]: newValue })
    }

    const displaySuccessMessage = () => { 
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000);
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">
                {newProduct.imageSource ? (
                    <img src={newProduct.imageSource} alt={newProduct.title} />
                ) : (
                    <div className="empty-image">Aucune image</div>
                    )}
            </div>
            <div className="input-fields">
                <TextInput 
                    name="title"
                    value={newProduct.title} 
                    type="text" 
                    placeholder="Nom" 
                    onChange={handleChange}
                    Icon={<FaHamburger />}
                    version="minimalist"
                />
                <TextInput
                    name="imageSource"
                    value={newProduct.imageSource} 
                    type="text" 
                    placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
                    onChange={handleChange}
                    Icon={<BsFillCameraFill />}
                    version="minimalist"
                />
                <TextInput 
                    name="price"
                    value={newProduct.price ? newProduct.price : ""} 
                    type="text" 
                    placeholder="Prix" 
                    onChange={handleChange}
                    Icon={<MdOutlineEuro />}
                    version="minimalist"
                />
            </div>
            <div className="submit">
                <Button 
                    className="submit-button"
                    label={"Ajouter un nouveau produit au menu"}
                    version="success"
                />
                {isSubmitted && (
                    <div className="submit-message">
                        <LiaCheckCircleSolid className="check" />
                        <span>Ajouté avec succés !</span>
                    </div>
                )}
            </div>
        </AddFormStyled>
    )    
}

const AddFormStyled = styled.form`
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
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .image-preview{
        grid-area: 1 / 1 / 4 / 2;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }

        .empty-image{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${theme.colors.greyLight};
            line-height: 1.5;
            color: ${theme.colors.greySemiDark};
            border-radius: ${theme.borderRadius.round};
        }
    }
    .input-fields{
        grid-area: 1 / 2 / 4 / -2;
        display: grid;
    }
    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        
        .submit-button{
            width: 50%;
            cursor: pointer;
        }
        .submit-message {
            display: flex;
            align-items: center;
            margin-left: 5px;
            padding: 0px 2px 0px 10px;
            font-size: ${theme.fonts.size.SM};
            font-weight: ${theme.fonts.weights.regular};
            color: ${theme.colors.success};

            .check {
                width: 18px;
                height: 18px;
            }
        }
    }
`;