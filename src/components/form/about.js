import React, { useState } from 'react'
import './form.css'
const About = () => {
    const [animaisAmount, setAnimaisAmout] = useState('')
    const [estadoAnimal, setEstadoAnimal] = useState([])


    const handleChange = (e) => {
        setEstadoAnimal(e.target.value)
    }

  return (
    <div className='form'>
        <form>
            <fieldset>
                <legend>Quantos animais são?</legend>
                <input type="radio" id='animal1' value="1" name='choise'
                onChange={(event) => setAnimaisAmout(event.target.value)} />
                <label >1</label>
                <input type="radio" id='animal2' value="2" name='choise' 
                onChange={(event) => setAnimaisAmout(event.target.value)} />
                <label>2</label>
                <input type="radio" id='animalmais' value="mais de 3" name='choise'
                onChange={(event) => setAnimaisAmout(event.target.value)}  />
                <label>mais</label>
            </fieldset>
            <fieldset className='radio-animal-estado'>
                <legend>Qual o estado no animal ?</legend>
                <input type="radio" value="Boa"
                name='animalEstado'
                onChange={handleChange}/>
                <label className='label-radio'>Boa</label>
                <br/>
                <input type="radio" value="machucado"
                name='animalEstado'
                onChange={handleChange}/>
                <label className='label-radio'>Machucado</label>
                <br/>
                <input type="radio" value="agressivo"
                name='animalEstado'
                onChange={handleChange} />
                <label className='label-radio'>Agressivo</label>
                <br/>
                <input type="radio" value="desconhecido"
                name='animalEstado'
                onChange={handleChange} />
                <label className='label-radio'>Desconhecido</label>
            </fieldset>
                
        </form>

    </div>
  )
}

export default About;