import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase-config.js';
import './form.css'
const About = () => {

    const [estadoAnimal, setEstadoAnimal] = useState('')
    const [Legenda, setLegenda] = useState('')
    const [Local,setLocal] = useState('')
    const [AnimalTamanho, setAnimalTamanho] = useState('')

    const postsCollection = collection(db,"animaisPosts")


    const sendForm = async () =>{
        await addDoc(postsCollection, {Legenda,Local,
        AnimalTamanho,estadoAnimal});
        
       window.location.pathname = "/feed"; 
    }

  return (
    <div className='form'>
        <form>
            <fieldset className='radio-animal-estado'>
                <legend>Qual o estado no animal ?</legend>
                <input type="radio" value="Boa"
                name='animalEstado'
                onChange={(event) => setEstadoAnimal(event.target.value)}/>
                <label className='label-radio'>Boa</label>
                <br/>
                <input type="radio" value="machucado"
                name='animalEstado'
                onChange={(event) => setEstadoAnimal(event.target.value)}/>
                <label className='label-radio'>Machucado</label>
                <br/>
                <input type="radio" value="agressivo"
                name='animalEstado'
                onChange={(event) => setEstadoAnimal(event.target.value)} />
                <label className='label-radio'>Agressivo</label>
                <br/>
                <input type="radio" value="desconhecido"
                name='animalEstado'
                onChange={(event) => setEstadoAnimal(event.target.value)} />
                <label className='label-radio'>Desconhecido</label>
            </fieldset>  
        </form>
        
        <form>
            <div>
                <label>Legenda sobre o animal</label>
                <br/>
                <textarea type="text" onChange={(event) => setLegenda(event.target.value)}
                placeholder="Ex: Um cachorro da raça Poodle"
                />
            </div>
            <fieldset>
                <label>Qual o tamanho?</label>
                <br/>
                <input type="radio" name='tamanho' value="pequeno"
                onChange={(event) => setAnimalTamanho(event.target.value)}/>
                <label>Pequeno</label>
                <input type="radio" name='tamanho' value="médio"
                onChange={(event) => setAnimalTamanho(event.target.value)}/>
                <label>Médio</label>
                <input type="radio" name='tamanho' value="grande"
                onChange={(event) => setAnimalTamanho(event.target.value)}/>
                <label>Grande</label>
            </fieldset>
            <div>
                <label>Quando você viu o animal?</label>
                <textarea type="text" placeholder="dia tal pela manhã"
                onChange={(event) => setLocal(event.target.value)}/>
            </div>
        </form>
        <button 
        onClick={sendForm}
        className='sendForm'>Enviar</button>
    </div>
  )
}

export default About;