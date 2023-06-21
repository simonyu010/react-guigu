// 之前学到的saveFormData就是高阶函数，它符合第二点，它return的返回值依然是一个函数

saveFormData = (dataType) => {
    return (event) => {
        this.setState([dataType]: event.target.value);
    }
}

//符合低一点，接受参数为函数的常见高阶函数有哪些呢？

new Promise( () => {}) //传一个executor, 内置构造函数，接受一个函数，所以高阶

//符合内置函数，接受参数，接受的参数是函数，所以高阶
setTimeout(() => {
    
}, timeout);

array.map() //接受一个参数，接受的参数是函数，符合