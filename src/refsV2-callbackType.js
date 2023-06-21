import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

class Demo extends React.Component{
    showData = ()=> {
        // 这里就比较有意思了，因为在JSX部分用到了箭头函数所以this就指向了Demo实例，那input1就不需要从this.ref里区了，而是应该从this这个实例自身区，箭头函数把this给指出来了
        const {input1} = this;
        alert(input1.value);
    }

    showData2 = ()=> {
        const {input2} = this;
        alert(input2.value);
    }
 
    render(){
        return(
            <div>
                {/* 下面这里, this.input1中的this是Demo实例里的this,因为()=> 箭头函数没有自己的this */}
                {/* <input ref={(currentNode)=>{this.input1 = currentNode}} type="text" placeholder="点击按钮提示数据"/>&nbsp; */}
                {/* 原版是上面那句，下面是简写，箭头函数的箭头左边只有一个参数所以小括号可以省略，箭头函数右边只有一句函数体所以大括号也可以省略了 */}
                <input ref={c=>this.input1 = c} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
                <input ref={c=>this.input2=c} onBlur={this.showData2} placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));