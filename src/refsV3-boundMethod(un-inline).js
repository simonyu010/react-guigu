import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

class Demo extends React.Component {

    state={isHot:false};

    showInfo = () => {
        const {input1} = this;
        alert(input1.value);
    }

    flipWeather = () =>{
        const {isHot} = this.state;
        this.setState({isHot:!isHot});
    }

    saveInput = (c) =>{
        this.input1 = c;
        console.log('+++++++++', c)
    }

    render() {
        const {isHot} = this.state;
        return (
            <div>
                <h2>It's {isHot ? 'Hot' : 'Cold'} Today</h2>
                {/* <input ref={(c) => { this.input1 = c; console.log('+++++++++', c) }} type="text" /><br/><br/> */}
                <input ref={ this.saveInput } type="text" /><br/><br/>
                <button onClick={this.showInfo}>点我提示输入的数据</button>
                <button onClick={this.flipWeather}>Click me to flip Weather</button>
            </div>
        )
    }
}

ReactDOM.render(<Demo />, document.getElementById('root'));