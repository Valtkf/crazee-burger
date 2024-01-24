import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'

export default function LoginForm() {      
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
        
    const handleSubmit = (event) => {
        event.preventDefault() 
        setInputValue("")
        navigate(`order/${inputValue}`)
    }

    const handleChange = (event) => { 
    setInputValue(event.target.value)
}


    return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez-vous</h2>
        <input 
            value={inputValue} 
            onChange={handleChange} 
            type="text" 
            placeholder="Entrez votre prénom" 
            required
        />
        <button>Accéder à mon espace</button>
    </LoginFormStyled>
    )
}

const LoginFormStyled = styled.div`
    background: green;
`;