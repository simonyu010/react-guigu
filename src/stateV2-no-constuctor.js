import React from "react";
import ReactDOM from 'react-dom';

class Weather extends React.Component {

    state = { isHot: false, wind: 'Slightly windy' };

    render() {
        const { isHot, wind } = this.state;
        return <h1 onClick={this.flipWeather}>It's {isHot ? 'Hot' : 'Cold'} today, {wind}</h1>;
    }
    
    flipWeather = () => {
        const isHot = this.state.isHot;
        this.setState({ isHot: !isHot })
    }

}
ReactDOM.render(<Weather />, document.getElementById('root'));
// export default Weather;