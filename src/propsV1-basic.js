import React from "react";
import ReactDOM from "react-dom";

class People extends React.Component {
    render(){
        const {name, gender, age} = this.props;
        return (
        <ul>
            <li>Name: {name}</li>
            <li>Gender: {gender}</li>
            <li>Age: {age}</li>
        </ul>
        )
    }
}

ReactDOM.render(<People name="Tom" gender="Male" age="40" />, document.getElementById('root'));
