import React from "react";
import ReactDOM from "react-dom";
class LifeCycle extends React.Component {
    state = { opacity: 1 };
    //组件挂载完毕时调用
    componentDidMount() {
        //解释第一点，为什么要把这个循环计时器写在componentDidMount里面，因为class里不是什么样的function都可以写的，为什么要写在L20的return上面呢？
        //很简单，因为return触发以后之后的函数和代码就不会被触发了
        //解释第二点，这个200ms是什么意思？因为课件里的功能是要求‘React学不会怎么办'这句话在每2秒钟内从1渐渐变淡到0,那也就是说如果我们想让他0.1, 0.1的变淡
        //就得每200毫秒变淡0.1, 如果想让他0.01，0.01的变淡，会更平滑，就是20毫秒一变了，但可能会占更多内存，要是用户电脑不好使可能体验不好
        this.whenToStop = setInterval(() => { //给定时器加个id whenToStop, 方面后面卸载的时候可以清楚
            //获取原状态，记得const {isHot} 还有const {username, password}吧？ 但这里因为opacity会一直改变，所以我们用let，所以这是给state取值第一步
            let { opacity } = this.state;
            //减小0.1, 用减等
            //这样一直减0.1会出现负值，所以要加个if判断一下让他停下
            opacity -= 0.1;
            if (opacity <= 0) opacity = 1
            //设置新的透明度
            // L25原版应该是 this.setState({opacity:opacity}); 第一个opacity是setState触发的state opacity (L6)
            // 冒号后面第二个opacity是L23的那个每次减等后的opacity值
            //因为key=value都是opacity所以可以简写成L25的样子，但记住这两个一个是state里面的原值，一个是每次减等的新值
            this.setState({ opacity });

        }, 200);
    }
    death = () => {
        //卸载组件
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    componentWillUnmount() {
        //清楚定时器，不然会报错，因为组件删了但是setInterval还在运行
        clearInterval(this.whenToStop);
    }
    //初始化渲染，状态更新之后
    render() {
        return (
            <div>
                <h2 style={{ opacity: this.state.opacity }}>React学不会怎么办</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }
}
ReactDOM.render(<LifeCycle />, document.getElementById('root'))