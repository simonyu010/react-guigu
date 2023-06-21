import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

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
// Set Strict rules about props that pass in (proptypes npm package is required)
People.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    age: PropTypes.number,
    newAge: PropTypes.func
}
// Set Default props, if no customized props are passed in
People.defaultProps = {
    gender: 'Unknown',
    age: 88
}

function plusOne(x){
    return  x + 1;
}

const tom = {name:'Tom', gender:'Male', age:plusOne(39)};

ReactDOM.render(<People {...tom} />, document.getElementById('root'));
