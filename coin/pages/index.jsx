// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Conversor() {

  const [select, setSelect] = useState('metro') //definir a unidade de conversão
  const [numero, setNumero] = useState(0) //definir o valor de conversão

  const [outSelect, setOutSelect] = useState('metro')
  const [saida, setSaida] = useState(0)

  const Converter = (inSelect = select, outSelect = outSelect, input = numero) => {
    //função que confere as unidades de saída e muda o valor global saida

    if ( inSelect== "centimetro") {
      if (outSelect == "metro") {
        saida = parseFloat(input / 100).toFixed(2)
      }
      else if (outSelect == "kilometro") {
        saida = parseFloat(input / 100000).toFided(6)
      }
    }else if (inSelect == "metro") {
      if (outSelect == "centrimetro") {
        saida = parseFloat(input * 100).toFixed(2)
      }
      else if (outSelect == "kilometro") {
        saida = parseFloat(input / 1000).toFixed(3)
      }
    }
    else if (inSelect == "kilometro") {
      if (outSelect == "metro") {
        saida = parseFloat(input * 1000).toFixed(2)
      }
      else if (outSelect == "centimetro") {
        saida = parseFloat(input * 100000).toFixed(2)
      }
    }

    return setSaida(saida)
  }

  const Resultado = (retorno) => {

    return (
      <div>
        <span>{retorno}</span>
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
          <label htmlFor="">de <input placeholder='0' type="number" /></label>
          <select value={select}
           onChange={(e)=>{setSelect(e.target.value)
          console.log(select)}}
            placeholder='Escolha a unidade' name="entrada" id="entrada">
            <option value="centimetro">centímetros</option>
            <option value="metro">metros</option>
            <option value="kilometro">kilômetros</option>
          </select>
          <span> para: </span>
          <select value={outSelect} onChange={(e) => {
            setOutSelect(e.target.value)
          }}  name="saida" id="saida">
            <option value="centimetro">centímetros</option>
            <option value="metro">metros</option>
            <option value="kilometro">kilômetros</option>
          </select>
        </div>
        <button></button>
        <Resultado></Resultado>
      </div>
    </div>
  )
}
