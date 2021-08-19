import React from 'react';
import axios from 'axios'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temp: '' };
    }

    componentDidMount() {
        axios.get("https://stockpicker-tth12-1-back.herokuapp.com/getWeather")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    temp: response.data.Temp
                })
            })
    }
    render() {
        return (
            <div>
                <h3>Temp: {this.state.temp}</h3>
            </div>

        )
    }
}

export default Weather;