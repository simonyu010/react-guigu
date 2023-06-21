import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

class Demo extends React.Component{
    showData = ()=> {
        const {input1} = this.refs;
        alert(input1.value);
    }

    showData2 = ()=> {
        const {input2} = this.refs;
        alert(input2.value);
    }
 
    render(){
        return(
            <div>
                {/* 这里只要写出来ref直接就进this.refs, 然后解构赋值一下就可以直接使用光杆input1.value了而不需要this.refs.input1.value */}
                <input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
                <input ref="input2" onBlur={this.showData2} placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));