// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [select, setSelect] = useState('metro') //definir a unidade de conversão
  const [numero, setNumero] = useState(0) //definir o valor de conversão

  const [outSelect, setOutSelect] = useState('metro')
  const [saida, setSaida] = useState(0)

  const Convertion = (select, outSelect, input = numero, saida) => {

    if (select == "centimetro") {
      if (outSelect == "metro") {
        saida = parseFloat(input / 100).toFixed(2)
      }
      else if (outSelect == "kilometro") {
        saida = parseFloat(input / 100000).toFided(6)
      }
    }else if (select == "metro") {
      if (outSelect == "centrimetro") {
        saida = parseFloat(input * 100).toFixed(2)
      }
      else if (outSelect == "kilometro") {
        saida = parseFloat(input / 1000).toFixed(3)
      }
    }
    else if (select == "kilometro") {
      if (outSelect == "metro") {
        saida = parseFloat(input * 1000).toFixed(2)
      }
      else if (outSelect == "centimetro") {
        saida = parseFloat(input * 100000).toFixed(2)
      }
    }

    return (
      <div>
        <span>{` ${input} `}</span>
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
          <select value={saida} onChange={(e) => {
            setSaida(e.target.value)
          }}  name="saida" id="saida">
            <option value="centimetro">centímetros</option>
            <option value="metro">metros</option>
            <option value="kilometro">kilômetros</option>
          </select>
        </div>
        <Convertion></Convertion>
      </div>
    </div>
  )
}
