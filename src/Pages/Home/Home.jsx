import React, { useState } from 'react'

//Componentes

import WeatherForm from '../../Components/Home/Form/WeatherForm'
import CityInformation from '../../Components/Home/City/CityInformation'
import Loader from '../../Components/Custom/Loader'
import Header from '../../Components/Custom/Header'

const Home = () => {
  //State
  const [cityName, setCityName] = useState('')
  const [cityInformation, setCityInformation] = useState(null)
  const [loader, setLoader] = useState(false)

  //Funiones
  const handleCity = ({ value }) => {
    setCityName(value)
  }

  const handleSearchweather = async e => {
    e.preventDefault()
    setCityInformation(null)
    setLoader(true)
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
    const response = await fetch(API)
    const result = await response.json()
    console.log(result)
    setCityInformation(result)
    setLoader(false)
  }

  return (
    <div className=' '>
      <Header />
      <br />
      <WeatherForm
        handleCity={handleCity}
        cityName={cityName}
        handleSearchweather={handleSearchweather}
      />

      {loader && <Loader />}

      {cityInformation && (
        <CityInformation
          name={cityInformation?.name}
          temperature={Math.round(cityInformation?.main.feels_like - 273.15)}

        />
      )}
    </div>
  )
}

export default Home
