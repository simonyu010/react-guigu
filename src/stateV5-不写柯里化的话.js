import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

class Login extends React.Component {
    //初始化状态
    state = {
        username: '',
        password: ''
    };
    //保存用户名到状态
    saveFormData = (dataType, value) => {
        this.setState({ [dataType]: value });
    }
    //表单提交
    handleSubmit = (event) => {
        event.preventDefault(); //阻止表单提交，ajax, 这样的话当点button提交的时候页面就不会刷新，事件event submit就不继续了
        const { username, password } = this.state; //这里因为username和password的value已经在this.state里了,他们是具体的值而不是节点property，所以L28不用.value
        alert(`Your usernmae is ${username}, your password is ${password}`);
    }
    render() {
        return (
            <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                Username: <input onChange={(event) => { this.saveFormData('username', event.target.value) }} type="text" name="username" />
                Password: <input onChange={(event) => { this.saveFormData('password', event.target.value) }} type="password" name="password" />
                <button>Sign in</button>
            </form>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('root'))