你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！

看这篇文章前先问一个问题：为什么要使用变量解构赋值？它一般在什么场景下使用？
#### 数组的解构赋值
#####  基本使用
```javascript
let [one, two] = [1,2,3,4,5,6]
console.log(one) // 1
console.log(two) // 2
```
上面的代码是对数组进行的解构赋值，他将等号右边的数组元素`1`和`2`分别赋值给了等号左边的变量`one`和`two`，这里需要注意一下在数组解构赋值的时候等号左边变量在数组中的位置要和等号右边数组元素的位置相对应才行；`one`对应的是`1`，`two`对应的是`2`。那如果变量没找到对应的数组元素呢？
```javascript
let [one, two, three, four, five, six, seven] = [1,2,3,4,5,6]
console.log(one) // 1
console.log(two) // 2
console.log(six) // 6
console.log(seven) // undefined
```
在上面代码中，变量`seven`并未找到等号右边数组中对应位置的元素，就会返回`undefined`。
##### 默认值
数组的解构可以提供默认值，当解构遇到`undefined`时，默认值就会生效。ES6内部是使用全等`===`运算符来确定解构是否有效。
```javascript
let [one, two, three, four, five, six, seven = 7] = [1,2,3,4,5,6]
console.log(one) // 1
console.log(two) // 2
console.log(six) // 2
console.log(seven) // 7
```
上面的代码在解构赋值的时候当变量`seven`未`undefined`时未它设置的默认值`7`就会生效。
#### 对象的解构赋值
##### 基本使用
```javascript
let { foo, baz, bar  } = { foo: 111, bar: 222, baz: 333 }
console.log(baz) // 333
console.log(foo) // 111
console.log(bar) // 222
```
对象的解构与数组解构有一点不同，数组的解构变量的位置必须要与等号右边的数组元素的位置相对应才能正确的解构。而对象的解构等号左边变量名需要与等号右边的对象属性名一致，能找到对应的属性名就行。上面的代码`baz`变量与等号右边对象中对应的baz属性的位置不一致，但也找到了对应的属性名，所以无需关注对象属性的位置。
```javascript
let { log } = console
log('xxxx') // xxxx
```
上面的代码对`console`对象进行了解构，将`log`属性赋值给了`log`变量并在控制台打印了`xxxx`
那如果变量名与属性名不一致呢？可以这么写：
```javascript
let {foo: ccc, baz: ddd } = { foo: 111, bar: 222, baz: 333 }
console.log(ccc) // 111
console.log(ddd) // 333
```
上面的代码等号左边变量名与等号右边属性名不一致写成了`foo: ccc`实际上访问的变量`ccc`，这么写ES6会先去找同名属性`foo`，然后再将属性对应的值赋值给变量`ccc`
```javascript
let { foo: foo, bar: bar, baz: baz } = { foo: 111, bar: 222, baz: 333 }
console.log(baz) // 333
console.log(foo) // 111
console.log(bar) // 222
```
实际上，上面代码的写法才是对象解构赋值的标准写法，开头那段代码是它的简写形式。对象解构赋值内部机制其实是：先找到变量对应同名属性，然后将属性名对应的值赋值给变量。
```javascript
const obj = {
  o: {
    y: 'yyy',
    p: {
      x: 'xxx'
    }
  }
}
const { o, o:{ y, p: { x }}} = obj
console.log(o) // {"y": "yyy","p": {"x": "xxx"}}
console.log(y) // yyy
console.log(x) // xxx
```
上面是一个嵌套的对象通过解构赋值将`obj`对象对应的属性值赋值给了同名变量
##### 默认值
```javascript
let { name, age, Gender = '男'} = { name: 'xiaobaiCoding', age: 26 }
console.log(name) // xiaobaiCoding
console.log(Gender) // 男
console.log(age) // 26
```
上面的代码为`Gender`变量提供了一个默认值，实际上在等号右边的对象中并没有`Gender`属性，ES6未找到`Gender` 属性就返回`undefined`，此时如果Gender变量提供了默认值那就会使用默认值。
```javascript
let { name, age, Gender = '男'} = { name: 'xiaobaiCoding', age: 26 , Gender: '女'}
console.log(name) // xiaobaiCoding
console.log(Gender) // 女
console.log(age) // 26
```
如果Gender属性有值并不为`undefined`那提供的默认值肯定就不会生效咯。那如果显式的把一个属性值设置为`undefined`会有什么效果呢？
```javascript
let { name, age, Gender = '男'} = { name: 'xiaobaiCoding', age: 26 , Gender: undefined}
console.log(name) // xiaobaiCoding
console.log(Gender) // 男
console.log(age) // 26
```
我们看到默认值生效了！那我们由此得到结论：默认值生效的机制是变量对应的属性值为`undefined`的时候
#### 字符的串解构赋值
```javascript
let [a, b, c, d] = "xiaobai"
console.log(a) // x
console.log(b) // i
console.log(c) // a
console.log(d) // o
```
字符串也可以解构赋值，上面的代码对字符串`xiaobai`做了解构赋值，此时字符串被转成一个类似数组的对象
```javascript
let { length } = "coding"
console.log(length) // 6
```
类似数组的对象都有一个length属性，所以可以对字符串的属性进行解构
#### 数值和布尔值解构赋值
如果等号右边的是数值或布尔值，会先将其转为对象。
```javascript
let {toString: s} = 123
console.log(s === Number.prototype.toString) // true
let {toString: f} = true
console.log(f === Boolean.prototype.toString) //true
```
上面的代码对布尔值和数值进行了解构赋值，ES6先将其转为了一个对象，因为布尔值和数值包装对象都有`toString`属性，所以`s === Number.prototype.toString`这句代码返回的是`true`在解构赋值的时候，等号右边如果不是对象或数组会ES6会将其先转为一个对象，`null`和`undefined`无法转为一个对象，对他们进行解构赋值会报错。
```javascript
let {prop: x} = null
let {prop: y} = undefined
console.log(x) // TypeError
console.log(y) // TypeError
```
#### 函数参数的解构赋值
##### 基本使用
```javascript
function add([a, b]){
  return a + b
}
console.log(add([2,3])) // 5
```
上面的代码对函数的参数进行了解构赋值，调用add的时候传入的参数是一个数组，`add`函数接受到这个参数被解构成了`a`和`b`两个变量，实际上函数内部使用到的`a`和`b`并返回了`a+b`的结果
##### 默认值
```javascript
function add2({x = 1, y = 2} = {}){
  return x * y
}
console.log(add2({x: 2, y: 10})) // 20
console.log(add2({x: 2})) // 4
console.log(add2({})) // 2
console.log(add2()) // 2
```
上面代码为函数参数提供了默认值，调用时传入不同的参数返回对应的结果
现在可以回答最开始那个问题了，有时候一个对象中可能会包含很多的属性，而我们其实只需要其中的目一个或某几个属性，这时候使用变量解构赋值能更方便的从对象或数组中取出自己想要的某个值并赋值个一个变量，而且还能给变量设置默认值，当等号右边某个对象属性值为undefined时防止程序执行到哪里的时候报错。

最后还是那句话：即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号：`小白Coding日志`，每天分享精彩内容，与你一同探寻知识的边界。一起开启知识新旅程！🚀📚
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

