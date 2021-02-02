import React from 'react';
import {ContainerHome, ContainerButton} from './styles'
import logoImg from '../../assets/logoMettzer.png'
import {Link} from 'react-router-dom'
const HomePage = () => {
    return (
        <>
        <ContainerHome>
            <img src={logoImg}/>
        </ContainerHome>

        <ContainerButton>
            <Link to="/dashboard">
                Acessar plataforma
            </Link>
        </ContainerButton>
        </>
    )
}

export default HomePage;