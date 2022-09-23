import React from 'react'
import Img from '../assets/dog-home.png'
const home = () => {
  return (
    <div>
        <section>
            <img src={Img}/>
            <p>Sos animal é um website com o proposito de ajudar 
            animais em situação de rua.
            </p>
        </section>
        
    </div>

  )
}

export default home