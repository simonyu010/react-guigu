import React from "react";
import ReactDOM from 'react-dom';

class Weather extends React.Component{
    constructor (props){
        super(props);
        this.state = {isHot: false, wind: 'Slightly windy'};
        this.flipWeather = this.flipWeather.bind(this);
    }

    render(){
        const {isHot, wind} = this.state;
        return <h1 onClick={this.flipWeather}>It's {isHot ? 'Hot' : 'Cold'} today, {wind}</h1>;
    }

    flipWeather(){
        const isHot = this.state.isHot;
        this.setState({isHot: !isHot})
    }

}
ReactDOM.render(<Weather />, document.getElementById('root'));
// export default Weather;