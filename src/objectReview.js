let obj = {};

// 如果我想建立一个obj里面有一个property name而且他的值是Tom
obj.name = 'Tom';

//除了上面的方法，如果我想把a的值name当做property name呢？
let a = 'name';

obj[a] = 'Tom';