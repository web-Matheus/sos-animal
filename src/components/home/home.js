import React from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../assets/dog-home.png'
const Home = () => {
  const navigate = useNavigate();

  const goForm = () =>{
    navigate("/form")
  }
  
  return (
    <div>
        <section>
            <img src={Img} alt="icone de uma mulher em um parque"/>
            <p>Sos animal é um website com o proposito de ajudar 
            animais em situação de rua.
            </p>
        </section>
        <button onClick={goForm}
        >report</button>
        
    </div>

  )
}

export default Home