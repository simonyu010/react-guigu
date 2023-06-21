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
    saveFormData = (dataType) => {
        return (event) => {
        //object里面所有的property都是string, 所以L15如果直接写dataType，调出来的不是dataType这个var, 而是调的'dataType'这个string
        //如果要在object里面读dataType这个var, 就需要用到[dataType]
        this.setState({ [dataType]: event.target.value });

        }

    }
    //表单提交
    handleSubmit = (event) => {
        event.preventDefault(); //阻止表单提交，ajax, 这样的话当点button提交的时候页面就不会刷新，事件event submit就不继续了
        const {username, password} = this.state; //这里因为username和password的value已经在this.state里了,他们是具体的值而不是节点property，所以L28不用.value
        alert(`Your usernmae is ${username}, your password is ${password}`);
    }
    render() {
        return (
            <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                Username: <input onChange={this.saveFormData('username')} type="text" name="username" />
                Password: <input onChange={this.saveFormData('password')} type="password" name="password" />
                <button>Sign in</button>
            </form>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('root'))