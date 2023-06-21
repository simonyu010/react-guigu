import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault(); //阻止表单提交，ajax, 这样的话当点button提交的时候页面就不会刷新，事件event submit就不继续了
        const {username, password} = this;
        alert(`Your usernmae is ${username.value}, your password is ${password.value}`);
    }
    render() {
        return (
            <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                Username: <input ref={c => this.username = c} type="text" name="username"/>
                Password: <input ref={c => this.password = c} type="password" name="password"/>
                <button>Sign in</button>
            </form>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('root'))