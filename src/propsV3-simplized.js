import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class People extends React.Component {

    // Set Strict rules about props that pass in (proptypes npm package is required)
    static propTypes = {
        name: PropTypes.string.isRequired,
        gender: PropTypes.string,
        age: PropTypes.number,
        newAge: PropTypes.func
    }
    // Set Default props, if no customized props are passed in
    static defaultProps = {
        gender: 'Unknown',
        age: 88
    }

    render() {
        const { name, gender, age } = this.props;
        return (
            <ul>
                <li>Name: {name}</li>
                <li>Gender: {gender}</li>
                <li>Age: {age}</li>

            </ul>
        )
    }
}

function plusOne(x) {
    return x + 1;
}

const tom = { name: 'Tom', gender: 'Male', age: plusOne(39) };

ReactDOM.render(<People {...tom} />, document.getElementById('root'));
