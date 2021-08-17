import React from 'react';
import axios from 'axios'

class WeatherAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temp: '' };
        this.triggerApi = this.triggerApi.bind(this);
    }
    triggerApi() {
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
                <p>Push the button to get weather</p>

                <button onClick={this.triggerApi}>Submit</button>
                <h3>Expected Temp: {this.state.temp}</h3>
            </div>

        )
    }
}

export default WeatherAPI;