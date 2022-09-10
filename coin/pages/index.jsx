// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Conversor.module.css'
import { useState } from 'react'

export default function Conversor() {

  const [inSelect, setInSelect] = useState('metro') //definir a unidade de conversão
  const [entrada, setEntrada] = useState(0) //definir o valor de conversão

  const [outSelect, setOutSelect] = useState('metro')
  const [saida, setSaida] = useState(0)

  const Converter = () => {
  
    if ( inSelect== "centimetro") {
      if (outSelect == "metro") {
        setSaida(parseFloat(entrada / 100).toFixed(2))
      }
      else if (outSelect == "kilometro") {
        setSaida(parseFloat(entrada / 100000).toFided(6))
      }
    }else if (inSelect == "metro") {
      if (outSelect == "centrimetro") {
        setSaida(parseFloat(entrada * 100).toFixed(2))
      }
      else if (outSelect == "kilometro") {
        setSaida(parseFloat(entrada / 1000).toFixed(3))
      }
    }
    else if (inSelect == "kilometro") {
      if (outSelect == "metro") {
        setSaida(parseFloat(entrada * 1000).toFixed(2))
      }
      else if (outSelect == "centimetro") {
        setSaida(parseFloat(entrada * 100000).toFixed(2))
      }
    }

    return (
      <div>
        <span>{saida}</span>
      </div>
    )
  } 

  
  return (
    <div>
      <h1>Prototipo inicial, conversor de unidades</h1>
      <br />
      <div>
        <h4>Conversor</h4>
        <h3>Unidades de comprimento</h3>
        <div>
          
          <label htmlFor=""> <input value={entrada} 
           onChange={(e) => {setEntrada(e.target.value)}} placeholder='0' type="number" /> </label>

          <select value={inSelect}
           onChange={(e)=>{setInSelect(e.target.value)
           console.log(inSelect)
           console.log(entrada)
          }}
             name="entrada" id="entrada">
            <option value="centimetro">centímetros</option>
            <option value="metro">metros</option>
            <option value="kilometro">kilômetros</option>
          </select>

          <Converter></Converter>

          <select value={outSelect} onChange={(e) => {
            setOutSelect(e.target.value)
            console.log(outSelect)
            console.log(saida)
          }}  name="saida" id="saida">
            <option value="centimetro">centímetros</option>
            <option value="metro">metros</option>
            <option value="kilometro">kilômetros</option>
          </select>

        </div>
      </div>
    </div>
  )
}
