import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

class Demo extends React.Component{
    inputRef1 = React.createRef();

    showData = ()=> {
        console.log(this.inputRef1); 
        alert(this.inputRef1.current.value);
    }

    showData2 = (event)=> {
        alert(event.target.value);
    }
 
    render(){
        return(
            <div>
                {/* L21和L22就必须用到ref因为我们操场做的是input,但是事件在button上 */}
                <input ref={this.inputRef1} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
                {/* 发生事件onBlur的element input正好是我要操作的那个element input, ref就不需要了，可以用event.target指向同一个element */}
                <input onBlur={this.showData2} placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));