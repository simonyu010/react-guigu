/*
1. Use .map() on arrays
2. JS表达式expression和语句condition的区别
3. JSX只支持表达式expression，也就是说不支持if, for loop, switch, 可以写ternary到state, 或者函数柯里化来逐级return
4. Function component的用法，因为不能用state和refs, 所以是简单组件，没有class component好用，但是新版React因为有hooks所有又变得受欢迎起来了
5. 复习一下类class和构造器constructor, 注意如果在一个class里面写function, 直接写方法名就行，比如 speak() {}, 不需要 function speak() {}
6. 类class component中constructor不是必须要写的，但是如果用了，那么调用这个类进行extend的子class也需要constructor而且还必须用到 super() 来继承原先的params或者vars
7. 如果在子类里不满足还要加几个变量或者params, 那如果父类用constructor构建params, 我们自然就要用 super()先给他继承过来然后再在constructor下面加其他的params/vars
*/

import React from "react";
import ReactDOM from "react-dom";

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`我叫${this.name}，我年龄是${this.age}`)
    }
}

const p1 = new Person('Josh', 32)
const p2 = new Person('Catelyn', 26)

console.log(p1);
console.log(p2);
p1.speak();
p2.speak();

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    elite() {
        console.log(`我叫${this.name}，我年龄是${this.age}，我${this.grade}年级了`)
    }

    niubi() {
        console.log('他们都不行');
    }
}

const p3 = new Student('Simon', 37, 11)

console.log(p3);
p3.speak();
p3.elite();
p3.niubi();