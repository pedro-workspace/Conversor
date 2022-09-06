import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [select, setSelect] = useState('metro') //definir a unidade de conversão
  const [numero, setNumero] = useState(0) //definir o valor de conversão

  const ChoseUnit = (value) => {
    setSelect(value.target.select)

  }

  const MetrosCm = (metros) => {

    return metros * 100
  }

  const MetrosKm = (metros) => {

    return parseFloat(metros / 1000).toFixed(3)
  }

  const CmMetro = (cm) => {
    return parseFloat(cm / 100).toFixed(3)
  }

  const CmKm = () => {
    return parseFloat(cm / 100000).toFixed(6)
  }

  return (
    <div>
      <h1>Prototipo inicial, conversor de unidades</h1>
      <br />
      <div>
        <h4>Conversor</h4>
        <h3>Unidades de comprimento</h3>
        <div>
          <select value={select}
           onChange={(e)=>{setSelect(e.target.value)
          console.log(select)}}
            placeholder='Escolha a unidade' name="unidade" id="unidade">
            <option value="centimetro">Centímetro</option>
            <option value="metro">Metro</option>
            <option value="kilometro">Kilômetro</option>
          </select>
          <label htmlFor="">
            <input type="number" />
          </label>
        </div>
      </div>
    </div>
  )
}
