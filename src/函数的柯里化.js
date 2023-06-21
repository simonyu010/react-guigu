// 定义：函数的柯里化 - 通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编吗形式

// 如果我想输出3个数的和，不用柯里化的话，可以这么写

function sum(a, b, c) {
    return a + b + c;
};

const result = sum(1, 2, 3)
console.log(result);

//如果我想写成高阶柯里化函数，就要这么写

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

const result = sum(1, 2, 3)
console.log(result);

//那么为什么要写柯里化呢，看着这么繁琐，既然可以一次接到abc三个参数为什么要一个一个接呢？
saveFormData = (dataType) => {
    return (event) => {
        this.setState([dataType]: event.target.value);
    }
}

//其实上面这个function就用到了柯里化，因为我们不能直接在大括号里返回dataType和event，所以我们用柯里化来一个一个导入