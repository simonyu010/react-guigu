import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

class Demo extends React.Component{
    // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点, 该容器是“专人专用”的， 也就是说里面只能存一个，放在current里
    //我用createRef创建出了一个容器，这个容器我挂在了实例的自身上，起了个名字叫myRef
    inputRef1 = React.createRef();
    inputRef2 = React.createRef();

    showData = ()=> {
        console.log(this.inputRef1); //这里console.log了一下看到了一下容器看到了 {current: input}, 说明节点input被放在了myRef的current property里面
        alert(this.inputRef1.current.value);
    }

    showData2 = ()=> {
        alert(this.inputRef2.current.value);
    }
 
    render(){
        return(
            <div>
                {/* this.myRef这里我为什么要写this呢？因为myRef我是放在实例自身上的 */}
                {/* 下面ref={this.myRef}做了什么事呢？他把当前的ref所在的节点/element input存储进了this.myRef这个容器里面, 
                它就不是什么回调函数了，它是用React最新的API - .createRef生成的一个容器，容器专门用来存储被ref所标识的节点input  */}
                <input ref={this.inputRef1} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
                <input ref={this.inputRef2} onBlur={this.showData2} placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));