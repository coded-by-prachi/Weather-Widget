import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from "react";
import { red } from '@mui/material/colors';



export default function Searchbox({ updateInfo }) {
    let [city, setcity] = useState("");
    let [Error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e8b2ee0c8629835218d0eaff143d8ec5";

    let getWeatherInfo = async (city) => {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod != 200) {
                throw new Error(jsonResponse.message);
            }
            return {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
    };

        let handleChange = (evt) => {
            setcity(evt.target.value);
        };

        let handleSubmit = async (evt) => {
                evt.preventDefault();
                setError(false);
                try{
                let newInfo = await getWeatherInfo(city);
                updateInfo(newInfo);
                setcity("");
            } catch (err) {
                setError(true);
            }
        };

        return (
            <div className="style">
                <form onSubmit={handleSubmit}>
                    <TextField id="city"
                        label="city"
                        variant="standard"
                        required value={city}
                        onChange={handleChange}
                        InputLabelProps={{
                            required: false,
                            style: { color: "white", fontSize: "18px" }  // label color
                        }}
                        sx={{
                            "& .MuiInput-underline:before": { borderBottomColor: "black" },
                            "& .MuiInput-underline:hover:before": { borderBottomColor: "#90caf9" },
                            "& .MuiInput-underline:after": { borderBottomColor: "#42a5f5" },
                            marginRight: "15px"   

                        }}
                    />
                    <div class="Button">
                        <Button variant="contained" type="submit">Search</Button>
                        {Error && <p style={{ color: "red" }}>Not Available</p>}
                        <br></br>
                        <br></br>
                    </div>
                </form>

            </div>
        )
    }