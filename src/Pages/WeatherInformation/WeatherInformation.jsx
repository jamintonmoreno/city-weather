import React from 'react'
import { useHistory, useLocation } from "react-router-dom";


const WeatherInformation = () => {
    //Hooks Router
    const history = useHistory()
    const location = useLocation()

    //Funciones
    const handleHistory = () =>{
      history.goBack('/weather');
    }

    return (
        <div>
            {location.pathname}
            <br />
           <button onClick={handleHistory}> Ver </button>
        </div>
    )
}

export default WeatherInformation
