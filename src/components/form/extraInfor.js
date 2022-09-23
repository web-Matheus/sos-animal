import React, { useState } from 'react'
import "./form.css"
const ExtraInfor = () => {
    const [QueAnimal, setQueAnimal] = useState('')
    const [Local,setLocal] = useState('')
    const [AnimalTamanho, setAnimalTamanho] = useState('')
        const handleSub = (e) =>{
            e.preventDefault();
            console.log(Local, QueAnimal,AnimalTamanho)
        }
  return (
    <div className='form'>
    <h2>Informação extra</h2>
        <form>
            <div>
                <label>Que animal era ?</label>
                <br/>
                <input type="text" onChange={(event) => setQueAnimal(event.target.value)}
                placeholder="Ex: Um cachorro da raça Poodle"
                />
            </div>
            <div>
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
            </div>
            <div>
                <label>Quando você viu o animal?</label>
                <input type="text" placeholder="dia tal pela manhã"
                onChange={(event) => setLocal(event.target.value)}/>
            </div>
        </form>
    </div>
  )
}

export default ExtraInfor