import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../../reusable-ui/TextInput';
import Button from '../../reusable-ui/Button';
import { theme } from '../../theme';
import { authentificateUser } from '../../../api/user';
import Welcome from './Welcome';

export default function LoginForm() {      
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
        
    const handleSubmit = async (event) => {
        event.preventDefault()
        authentificateUser(username)
        setUsername("")
        navigate(`order/${username}`)
    }

    const handleChange = (event) => { 
    setUsername(event.target.value)
}


    return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <Welcome />
        <TextInput 
            value={username} 
            onChange={handleChange} 
            placeholder={"Entrez votre prénom"}
            required
            Icon={<BsPersonCircle />}
            className="input-login"
            version="normal"
        />

        <Button
            label={"Accéder à mon espace"} 
            Icon={<IoChevronForward />} 
        />
    </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;

    .input-login {
        margin: 18px 0;
    }
`;