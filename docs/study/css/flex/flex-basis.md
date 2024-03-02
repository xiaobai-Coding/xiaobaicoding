### 基础概念
#### Flexbox布局的概念
Flexbox布局是一种布局的模式，用来在一个维度上为项目设置布局
#### 容器
在HTML中大多数元素例如`div`、`ul`、`main`块元素，`span`、`em`、`i`行内元素都可以作为Flex容器，它的作用是开启一个Flex布局模式，你只需要在元素上面设置`display: flex`即可开启一个Flex布局容器。
#### 项目
当开启一个Flex布局的时候，容器中的一个个元素`::before`、`::after`、文本、dom元素就是项目，这些项目是容器的子元素，他们之间是父子关系，子元素也可以开启自己独立的Flex布局，他不会继承父元素的flex属性。
```html
<div class="container">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
<!-- 开启Flex布局 -->
.container {
  display: flex; 
  width: 300px;
  height: 200px;
  background-color: #8a8282;
}
```
#### 主轴、侧轴
在Flex中容器有两个轴分别是**主轴**和**侧轴**，默认情况下主轴沿着行的方向分布，侧轴沿着列的方向分布。有一点需要注意，主轴和侧轴的方向并不是固定不变的而是要受到`flex-direction`和`writing-mode`或者`direction `阅读模式的影响
#### 容器大小：主轴尺寸、侧轴尺寸
Flex容器的大小是由主轴尺寸或者侧轴尺寸决定的，主轴的尺寸：主轴开始位置到主轴结束位置的距离，侧抽尺寸：侧轴的开始位置到侧轴的结束位置的距离。
#### flex-direction控制项目的方向
flex-direction属性用来控制主轴上项目的排布方向，默认是`row`即按照行内的方式在一行排列，如果想让元素按照块的方式在一列显示则可以设置`flex-direction: column``row-reverse`和`column-reverse`可以使主轴（或者侧轴）的起点和终点位置互换
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36013995/1701924852577-9fd51c69-e6a2-43d7-9f20-2e8a531c50cc.png#averageHue=%23e0f6e7&clientId=u9ff1f43e-0e68-4&from=paste&height=229&id=u2c838227&originHeight=229&originWidth=486&originalType=binary&ratio=1&rotation=0&showTitle=false&size=8912&status=done&style=none&taskId=ubc541e98-468e-4927-9550-7815c35a3d7&title=&width=486)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36013995/1701925070945-a55acf8e-fb22-4277-8bf3-64bd14eab1a6.png#averageHue=%23fbdcc8&clientId=u9ff1f43e-0e68-4&from=paste&height=394&id=ud931396b&originHeight=394&originWidth=435&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10648&status=done&style=none&taskId=ua892181a-6ff8-4341-8023-7830dae8da5&title=&width=435)
#### flex-wrap控制项目换行
flex-wrap用来控制项目的换行，默认情况下是不换行的`flex-wrap: nowrap`，即使项目已经溢出容器了它也保持一行排列，如果想让容器中的项目在一行容纳不下后进行强制换行显示可以设置`flex-wrap: wrap`,`wrap-reverse`也会让项目换行只不过他的方向是相反的，例如`wrap`会让换行元素排列到下一行，而`wrap-reverse`会让换行元素排列到当前行的上一行去，如下👇
```html
<style>
.container {
    width: 400px;
    background-color: #ddb6d8;
    display: flex;
    gap: 10px;
    border: 1px solid #0a57e7;
    flex-wrap: wrap-reverse;
}
.container div{
    width: 100px;
    height: 100px;
    background-color: #c9df0b;
    text-align: center;
    line-height: 100px;
}
</style>
<div class="container">
    <div>itm1</div>
    <div>itm2</div>
    <div>itm3</div>
    <div>itm4</div>
</div>
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709274595040-b3e930db-4ecf-41e2-9414-ff3cdbc7023b.png#averageHue=%23004a07&clientId=uca817f1e-9b34-4&from=paste&height=226&id=u18f0ddea&originHeight=226&originWidth=427&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2270&status=done&style=none&taskId=u1874e7eb-d362-4e0a-9c3d-599eabd3199&title=&width=427)
#### order 项目排序
`order`属性是设置在容器中项目上面的，可以用来为项目进行排序，`order`的值越小当前元素越排在最前面，可以是正值也可以是负值。如果遇到两个`order`值相同的元素会按照实际文档上的顺序进行排列
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36013995/1701927123127-66b42ab3-0eca-45a2-b67a-412d50504b3c.png#averageHue=%23fdf4d7&clientId=u9ff1f43e-0e68-4&from=paste&height=321&id=u2b746c05&originHeight=321&originWidth=746&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9464&status=done&style=none&taskId=u05e08f26-3981-424b-b5ea-4b793d93497&title=&width=746)
#### gap项目之间的间距
`gap`用来设置项目之间的间距，只需要在flex容器上设置`gap`属性即可，接收两个值，如果只设置一个值的话，那么第二个值和第一个值等同，如果两个值都设置了，第一个值是`row-gap`行的间距，第二个则是`column-gap`列的间距
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36013995/1701957422141-3d6d1803-2859-4f3b-8c84-8be6f401b097.png#averageHue=%23bce7d7&clientId=u52761c02-406c-4&from=paste&height=313&id=u01341a9f&originHeight=313&originWidth=402&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=11533&status=done&style=none&taskId=u2e3af77c-53de-4d14-bf59-91277ea0a06&title=&width=402)
