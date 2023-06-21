/*
React 101 - JSX syntax
1. 定义 Virtual DOM 时，不要写引号
2. 当在<tag></tag>中混入JS代码，表达式，var时要用 {}
3. 样式的类 ( class)指定时不要用class, 要用 className (JSX)
4. 内联样式, 要用 style={{key:value}}的形式去写
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母
 a). 若小写字母开头，则将该标签转为html中同名元素，若html中没有该标签对应的同名元素，则报错
 b). 若大写字母开头，React就去渲染对应的组件，若组件没有定义，则报错
*/

import React from "react";
import ReactDOM from "react-dom";

const myId = 'Simon'
const myData = 'Yo, rEacT'

const VDOM = (
    <div>
        <h2 className="title" id={myId.toLowerCase()}>
            <span style={{ color: 'white', fontSize: '29px' }}>{myData.toLowerCase()}</span>
        </h2>
        <h2 className="title" id={myId.toUpperCase()}>
            <span style={{ color: 'white', fontSize: '29px' }}>{myData.toLowerCase()}</span>
        </h2>
        <input type="text"/>
        {/* eslint-disable-next-line */}
        <Good>123</Good>
    </div>
)

ReactDOM.render(VDOM, document.getElementById('test'));
