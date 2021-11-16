import React from "react";

// Router
import { useHistory } from "react-router-dom";


const CityInformation = ({name, temperature}) => {
   //Hooks Router
    const history = useHistory()
    //Funciones
    const handleHistory = () =>{
        console.log(history);
        history.push(`/weather/${name}`);
    }
 
    return (
        <div className="text-center border-2 border-black w-1/4 m-auto ">
            <h1>Ciudad: {name}</h1>
            <h2>Temperatura: {temperature}°</h2>

            <button onClick={handleHistory}>See more</button>
        </div>
    )
}

export default CityInformation