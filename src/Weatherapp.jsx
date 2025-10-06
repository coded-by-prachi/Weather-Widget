import Searchbox from './Searchbox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from "react";


export default function Weatherapp(){
    const [weatherinfo, setweatherinfo]= useState({
        city: "Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        feels_like: 24.84,
        humidity: 47,
        weather: "Cloudy"
    });

        let updateInfo = (newInfo) =>{
            setweatherinfo(newInfo);
        };

    return( 
        <div style= {{textAlign:"center", color: " white"}}>
            <h1>Weather Widget </h1>
            
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    );
}