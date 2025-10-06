import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import FoggyIcon from '@mui/icons-material/Foggy';


export default function InfoBox({ info }) {
    const weatherImages = {
        MIST_URL: "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg",

        HOT_URL: "https://images.pexels.com/photos/542702/pexels-photo-542702.jpeg",

        RAIN_URL: "https://images.unsplash.com/photo-1706730511764-23a0ff2eecbf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fFJBSU4lMjBXRUFUSEVSfGVufDB8fDB8fHww",

        COLD_URL: "https://images.pexels.com/photos/34148776/pexels-photo-34148776.jpeg",

        CLEAR_URL: "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg",

        DEFAULT_URL: "https://images.unsplash.com/photo-1532178910-7815d6919875?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlZmF1bHQlMjB3ZWF0aGVyfGVufDB8fDB8fHww",
    };





    let weatherImage = weatherImages.DEFAULT_URL;
    if (info?.weather) {
        const condition = info.weather.toLowerCase();
        if (condition.includes("clear")) weatherImage = weatherImages.CLEAR_URL;
        else if (condition.includes("hot")) weatherImage = weatherImages.HOT_URL;
        else if (condition.includes("rain")) weatherImage = weatherImages.RAIN_URL;
        else if (condition.includes("cold")) weatherImage = weatherImages.COLD_URL;
        else if (condition.includes("default")) weatherImage = weatherImages.DEFAULT_URL;
        else if (condition.includes("mist") || condition.includes("haze") || condition.includes("fog")) weatherImage = weatherImages.MIST_URL;
    };

    



    return (
        <div>
            <div className="card">
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={weatherImage}
                        alt="weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {info.city}

                        </Typography>
                        <Typography align="center" variant="body2" sx={{ color: 'text.secondary', }}>
                            Temperature= {info.temp}&deg;C
                            <br></br>
                            <br></br>
                            Humidity= {info.humidity}%
                            <br></br>
                            <br></br>
                            Min Temperature= {info.tempMin}&deg;C
                            <br></br>
                            <br></br>
                            Max Tempertaure= {info.tempMax}&deg;C
                            <br></br>
                            <br></br>
                            The weather can be described as <i>{info.weather}</i> & feels like= {info.feels_like}&deg;C
                            <br></br>
                            <br></br>


                        </Typography>

                    </CardContent>

                </Card>
            </div>



        </div >
    );
}