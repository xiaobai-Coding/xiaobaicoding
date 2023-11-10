import{_ as e,o as n,c as r,d as p}from"./app-832e5e53.js";const l={},t=p(`<p>1.语法</p><p>对象可以通过两种方式定义：一种是对象字面量形式，一种是构造形式</p><p>对象字面量：</p><pre><code>var muObject = {
  key: value
}
</code></pre><p>构造形式的：</p><pre><code>var myObject = new Object()
myObject.key = value
</code></pre><p>不管是使用对象字面量形式还是构造形式创建出来的对象都是一样的，唯一的区别是用对象字面量创建的对象可以一次性添加多个键值对，而使用构造形式创建的对象你必须逐个为他添加。另外，直观的来看，对象字面量的方式去创建一个对象显然要比构造形式写法上更简洁。一般我们推荐使用字面量的方式去创建对象。</p><p>2.类型</p><p>对象是JavaScript的基础。在JavaScript中一共有6种主要类型：</p><ul><li>string</li><li>number</li><li>boolean</li><li>null</li><li>undefined</li><li>object</li></ul><p>在JavaScript中还有一些对象子类型，我们称之为复杂基本类型，例如：Function、Array。那么同样的也有基本类型：string、number、boolean、null、undefined</p><p>2.1内置对象</p><p>在JavaScript中是有一些对象子类型的，我们称之为内置对象，这些对象包括：</p><ul><li>String</li><li>Number</li><li>Boolean</li><li>Object</li><li>Function</li><li>Array</li><li>Date</li><li>RegExp</li><li>Error</li></ul><p>这些内置对象实际上可以将他们看做是内置函数，可以当做构造函数(通过new来调用函数)来创建对应的对象。</p><pre><code>var myObj = new String(&#39;string&#39;)
muObj // {}
typeof  myObj // &quot;object&quot;
Object.prototype.toString.call(obj) // &#39;[object Object]&#39;
// 实际上是调用了Object.toString方法
var str = &quot;hello!&quot;
str.length // 6
</code></pre><p>我们看到，hello!只是一个普通的string字符串，并不是一个对象，那为什么可以对这个字符串进行一些操作，比如获取length长度？</p><p>那是因为在必要的时候JavaScript会自动将字符串转为一个对象，不需要显式的去创建一个对象，这样就能访问他的属性和方法了，就会很方便了。</p><p>对于number也一样的他会调用new Number()：</p><pre><code>13.456.toFixed(2) // 13.46
</code></pre><p>null和undefined没有构造形式，只有文字形式，而Date只有构造没有文字形式</p><p>3.内容</p><p>3.1对象的内容</p><p>对象的内容是由一些存储在特定命名位置上的值组成的，我们称之为属性。</p><p>之前我的理解是对象的内容通常是存在这个对象容器内部的，其实对象内容存的只是对象的属性名称，这个属性名称就像指针一样指向了属性值的真正存储位置。</p><p>对象的访问是通过 . 操作符或者[]操作符。. 操作符被称为属性访问，[]操作符称为键访问。他们两访问的是同一个位置，并且返回值也是相同的。</p><pre><code>var myObj = {
  a: 1
}
myObj.a // 1
myObj[&#39;a&#39;] // 1
</code></pre><p>使用键访问变量的属性名称可以是一个变量，这样他就是一个动态的了，使用起来也更加灵活一些，而且它可以接受任意utf-8字符串作为属性名；再看属性访问它的属性名需要符合一定的命名规范，例如sub-next用属性访问的方式就不符合规范，这样是不行的，键访问就完全可行。</p><pre><code>var myObj = {
  b:2
}
var val = &#39;b&#39;
myObj[val] // 2
</code></pre><p>在对象中，属性名永远都是一个字符串，即使你传入一个字符串以外的值作为属性名，他也会先你的值转为字符串的。</p><p>3.2. 属性与方法</p><p>当一个对象的属性返回函数的时候，我们认为这个函数属于对象，其实不然，只不过是对这个函数的引用</p><pre><code>var myObj = {
  foo: function(){
    console.log(&quot;foo&quot;)
  }
}
var someFoo = myObj.foo
someFoo // Function 
myObj.foo // Function
</code></pre><p>3.3. 数组</p><p>数组也是一个对象，可以通过[]下标来访问数组元素</p><pre><code>var arr = [1,2,3,4]
arr.length // 4
arr[3] // 4
arr[4] = 5
arr // [1,2,3,4,5]
</code></pre><p>3.5. 属性描述符</p><p>一个对象的属性有对应的属性描述符，比如创建一个普通对象，他的属性描述符会使用默认值。value: 属性值、writable: 可写、enumerable:可枚举、configurable: 可配置。当然，可以用Object.difineProperty()新建一个属性或对属性进行修改。</p><pre><code>var myObj = {
  a: 2
}
Object.defineProperty(myObj,&quot;a&quot;,{
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true
})
myObj.a // 3
</code></pre><ol><li><p>writable 如果将writable的值设置为false的话，那么这个对象的属性就是不可写的，对他的修改赋值是不会成功的</p><p>Object.defineProperty(myObj,&quot;a&quot;,{ value: 3, writable: false, enumerable: true, configurable: true }) myObj.a = 3 myObj.a // 2</p></li><li><p>configurable</p></li></ol><p>对象的属性值不可配置，而且他的修改时一个单向操作，可以将true改为false但是无法将false再改为true。</p><pre><code>Object.defineProperty(myObj,&quot;a&quot;,{
  value: 2,
  writable: true,
  enumerable: true,
  configurable: false
})
myObj.a // 2
delete myObj.a 
myObj.a // 2
</code></pre><p>上面的代码可以看见deltet对myObj对象属性的删除操作并未成功</p><p>3.enumerable</p><p>enumerable对象属性是否可枚举也就是可遍历的意思。当enumerable设为false时，对于对象的变量，当前这个属性并不会被遍历到</p>`,45),o=[t];function a(i,c){return n(),r("div",null,o)}const b=e(l,[["render",a],["__file","02.html.vue"]]);export{b as default};
