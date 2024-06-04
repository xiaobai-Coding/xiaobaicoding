你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
### let

- **只在当前声明的代码快内有效**

使用let声明的变量，只在当前声明的代码块内有效，在代码块之外访问变量会报错
```javascript
{
  let a = 1
  console.log(a) // 1
}
console.log(a) // ReferenceError: a is not defined
```

- **不存在变量提升**

如果使用`var`声明的变量将存在变量提升，在变量声明之前也可以访问到这个变量，返回undefined。下面的代码是可以正常运行的且并未报错。
```javascript
console.log(b) // undefined
var b;
```
但如果使用`let`在未声明前就访问这个变量，程序就会报错，提示在未声明前无法访问这个变量。
```javascript
console.log(c) // ReferenceError: Cannot access 'c' before initialization
let c;
```

- **不允许重复声明**

在同一代码块内不能使用let重复声明变量，否则会报错
```javascript
{
  let d = 1;
  let d = 2;
  // SyntaxError: Identifier 'd' has already been declared
}
```

- **具有块级作用域**

下面的代码有两个代码块，用let声明了变量n，他们只在自己当前块内生效，内层代码块不会影响到外层代码块，执行函数分别输入了10和5
```javascript
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
    console.log(n) // 10
  }
  console.log(n); // 5
}
f1()
```
下面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量，并不会得到想要的结果，正确的做法是使用let。
```javascript
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```

- **暂时性死区**

   	在代码块内，使用let声明变量之前，该变量是不可访问的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。所以写代码时还是规范一点，变量必须先声明才能使用，这样可以避免很多错误！
```javascript
{
  e = '123'  
  console.log(e) // ReferenceError: Cannot access 'e' before initialization
  let e;
  console.log(e) // undefined
  e = '456'
  console.log(e) // '456'
}
```
### const

- **声明一个只读的常亮，一旦声明常量的值就不可以改变**

const 命令用来声明一个常量，这个常量一旦声明就不可以再去改变它了，下面的代码先用`const`关键字声明了一个常量，在控制台打印输入常量f的值为0，再对其进行赋值为1，程序执行到这里直接报错了：TypeError: Assignment to constant variable. 意思为不能给一个常量赋值
```javascript
const f = 0
console.log(f)
f = 1 // TypeError: Assignment to constant variable.
console.log(f)
```

- **只要声明就立马对其赋值，只声明不赋值会报错**

下面的代码声明了一个常量g，但未赋值，程序就会报错：`SyntaxError: Missing initializer in const declaration`意为：常量声明中缺少初始值设定项。所以，声明一个常量必须要给它赋一个初始值才行。
```javascript
const g; // SyntaxError: Missing initializer in const declaration
console.log(g)
```

- **不存在变量提升**

和`let`一样`const`不存在变量提升，下面的代码会报错
```javascript
{
  console.log(h) // ReferenceError: Cannot access 'h' before initialization
  const h = 1
}
```

- **具有块级作用域暂存性死区**

常量在各自的代码块内互不影响
```javascript
function f1() {
  const n = 5;
  if (true) {
    const n = 10;
    console.log(n) // 10
  }
  console.log(n); // 5
}
f1()
```
未声明前无法访问常量`e`
```javascript
{
  console.log(e) // ReferenceError: Cannot access 'e' before initialization
  const e = 0
  console.log(e) // 0
}
```

- **不允许重复声明**

同样，const不允许在同一个块内重复声明变量，否则报错
```javascript
{
  const i = 1; // SyntaxError: Identifier 'i' has already been declared
  const i = 3;
}
```

- **声明一个常量的值不可改变，其实指的是这个常量指向的内存地址所保存的值不可改变。**

实际上并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
下面代码中，常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。
```javascript
const foo = {};
// 为 foo 添加一个属性，可以成功
foo.prop = 123;
console.log(foo.prop) // 123
// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: Assignment to constant variable.
```
下面代码中，常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。
```javascript
const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错
```

最后还是那句话：即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号：`小白Coding日志`，每天分享精彩内容，与你一同探寻知识的边界。一起开启知识新旅程！🚀📚
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

