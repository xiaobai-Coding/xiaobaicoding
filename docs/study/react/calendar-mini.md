你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
### 前言
现在市面上的组件库大多包含日历组件，那么它们具体是如何实现的呢？其实原理很简单，主要是通过使用Date对象的相关API。今天我们就来开发一个迷你版的日历组件。  
### 功能分析
##### 实现一个迷你版的日历组件页面布局：

1. **Header部分**：最中间的位置用于显示当前月份，左右两边分别设置切换上月和下月的按钮。
2. **星期显示**：Header的下方依次显示星期日到星期六。
3. **Body部分**：显示当前月的天数。可以根据当前月份获取这个月有多少天，以及根据当前月1号获取是星期几，这样我们就能知道这个月从哪一天开始。

为日历组件提供默认值，即当前日历组件默认渲染为当前年份和月份。此外，还需提供一个`onChange`方法，用于返回当前选中的日期。这样，一个基本的日历组件就完成了。
### 项目搭建
使用vite来创建一个`React`项目
```javascript
npm create vite@latest calendar-mini
```
选择`React`然后选择`JavaScript`

![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721313844067-47c8a988-13e7-4a86-86cf-ca565a5603cc.png#averageHue=%23020101&clientId=ufee6c771-8e2a-4&from=paste&height=291&id=uf4c2aff3&originHeight=291&originWidth=842&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17255&status=done&style=none&taskId=u1bf2fb98-9572-4fb6-9ba8-c79af1af8f7&title=&width=842)
切换到项目目录下`cd calendar-mini`，运行`npm install` 安装依赖，`npm run dev `把项目跑起来
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721314229859-f29e5413-a72b-422b-a2fe-814d47523974.png#averageHue=%23fefefe&clientId=ufee6c771-8e2a-4&from=paste&height=863&id=u8fcf88d5&originHeight=863&originWidth=1903&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57523&status=done&style=none&taskId=u718dc7a6-a72e-4bc3-909c-6a57cc927dc&title=&width=1903)
### 编码

1. 页面基本布局

删除App.jsx中App组件中的`HTML`内容只保留下`h1`标签，
```javascript
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>mini日历组件📅</h1>
    </>
  )
}

export default App
```
新增一个Calendar组并提供基本样式，在App.jsx中导入组件
```javascript
import React from 'react';

function Calendar() {
  return (
    <div className="calendar">
      <div className="header">
        <button>&lt;</button>
        <div>2023 年 7 月</div>
        <button>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        <div className="empty"></div>
        <div className="empty"></div>
        <div className="day">1</div>
        <div className="day">2</div>
        <div className="day">3</div>
        <div className="day">4</div>
        <div className="day">5</div>
        <div className="day">6</div>
        <div className="day">7</div>
        <div className="day">8</div>
        <div className="day">9</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">16</div>
        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        <div className="day">20</div>
        <div className="day">21</div>
        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        <div className="day">25</div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        <div className="day">29</div>
        <div className="day">30</div>
        <div className="day">31</div>
      </div>
    </div>
  );
}

export default Calendar;
```
```css
.calendar {
  border: 1px solid #aaa;
  padding: 10px;
  width: 300px;
  height: 250px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.days {
  display: flex;
  flex-wrap: wrap;
}

.empty, .day {
  width: calc(100% / 7);
  text-align: center;
  line-height: 30px;
}

.day:hover {
  background-color: #ccc;
  cursor: pointer;
}
.day:hover, .selected {
  background-color: #22a4f1;
  cursor: pointer;
}
.m-10 {
  margin: 10px 0;
}
```
```javascript
import { useState } from 'react'
import './App.css'
import Calendar from './component/Calendar'
function App() {
  return (
    <>
      <h1>mini日历组件📅</h1>
      <Calendar />
    </>
  )
}

export default App
```
来看看效果👇
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721315595695-46ad4ca3-ffa5-418e-bd93-039496257889.png#averageHue=%23fdfdfc&clientId=ufee6c771-8e2a-4&from=paste&height=672&id=u1e02b29a&originHeight=672&originWidth=812&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34965&status=done&style=none&taskId=u225d27b7-4204-401b-8e68-c17abbcf058&title=&width=812)

2. 根据当前月份获取上月下月

结合`useState`来获取日历组件的当前年份和月份，月份要加1因为月份是从0开始的![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721316072861-c2818eb9-d68b-4137-9f75-111be8017c89.png#averageHue=%231a374c&clientId=ufee6c771-8e2a-4&from=paste&height=401&id=uf4037223&originHeight=401&originWidth=769&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32757&status=done&style=none&taskId=u4b9850e8-9220-4ded-a8f3-aa95f6cd98c&title=&width=769)
根据当前月获取上月下月
```javascript
// 上月 
  const lastMonth = () =>{
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }
  // 下月
  const nextMonth = () =>{
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }
```

3. 根据当前月份来渲染日期
```javascript
 const renderDays = () => {
    const days = []
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth())
    const firstDays = firstDayOfMonth(date.getFullYear(), date.getMonth())

    for(let i = 0; i<firstDays; i++){
      days.push(<div key={`empty-${i}`} className="empty"></div>)
    }
    for(let i = 1; i<=daysCount; i++){
      const handelClick = () =>{
        const current = new Date(date.getFullYear(), date.getMonth(), i)
        setDate(current)
        props.onChange(current)
      }
      if(i === date.getDate()){
        days.push(<div key={i} className="day selected" onClick={()=>handelClick()}>{i}</div>)
      }else{
        days.push(<div key={i} className="day" onClick={()=>handelClick()}>{i}</div>)
      }
    }
    
    return days
  }
```
定义一个renderDays函数用来渲染日期，提供一个days数组来动态的渲染日期，daysCount是当前月的天数，firstDays是当前月是从星期几开始的，先循环firstDays来添加空白项，再循环daysCount添加天，handelClick当点击某一天的时候选中并改变背景色。

4. 添加默认值defaultValue和onChange方法

为`Calendar`组件提供默认值
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721319085510-1e14de09-920c-4fe1-bc53-806c82cf4a96.png#averageHue=%231a374b&clientId=ufee6c771-8e2a-4&from=paste&height=321&id=u3a641607&originHeight=321&originWidth=538&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23240&status=done&style=none&taskId=u676d4427-ab4e-4b69-82b3-5ed4b94ad3f&title=&width=538)
为state设置默认值
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721319132056-6b030443-ff27-41aa-a55a-b04f6ee3ca6f.png#averageHue=%231a374c&clientId=ufee6c771-8e2a-4&from=paste&height=304&id=ube8a486d&originHeight=304&originWidth=647&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28734&status=done&style=none&taskId=u623decae-e498-4aef-bcb5-714c77c0a0f&title=&width=647)
为`Calendar`组件提供onChange方法，在点击某一天的时候调用`onChange`回调将最新的值传递给onChange方法

![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721355000943-e39e86f7-f85c-4e20-a264-eff6679c33ba.png#averageHue=%23c6eccb&clientId=u121cf06a-0655-4&from=paste&height=479&id=u658f5293&originHeight=479&originWidth=872&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57567&status=done&style=none&taskId=u9a9571ed-54f0-48f7-8a22-99ac5bf2f21&title=&width=872)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1721319629174-91a1656e-a4c8-4c71-9754-19a5cbb78fdc.png#averageHue=%231a364b&clientId=ufee6c771-8e2a-4&from=paste&height=328&id=u47752509&originHeight=328&originWidth=910&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28896&status=done&style=none&taskId=ua3662a95-331f-4b22-9ad2-13bf5c9fedb&title=&width=910)

Calendar.jsx组件全部代码
```javascript
import { useState } from 'react';

function Calendar(props) {
  const [date, setDate] = useState(new Date(props.defaultValue))
  console.log(date.toLocaleDateString())
  // 上月 
  const lastMonth = () =>{
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }
  // 下月
  const nextMonth = () =>{
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }
// 获取每个月有多少天
const daysOfMonth = (year, month) =>{
  return new Date(year, month + 1, 0).getDate()
}
// 获取每个月第一天是星期几
const firstDayOfMonth = (year, month) =>{
  return new Date(year, month, 1).getDay()
}
const renderDays = () => {
  const days = []
  const daysCount = daysOfMonth(date.getFullYear(), date.getMonth())
  const firstDays = firstDayOfMonth(date.getFullYear(), date.getMonth())

  for(let i = 0; i<firstDays; i++){
    days.push(<div key={`empty-${i}`} className="empty"></div>)
  }
  for(let i = 1; i<=daysCount; i++){
    const handelClick = () =>{
      const current = new Date(date.getFullYear(), date.getMonth(), i)
      setDate(current)
      props.onChange(current)
    }
    if(i === date.getDate()){
      days.push(<div key={i} className="day selected" onClick={()=>handelClick()}>{i}</div>)
    }else{
      days.push(<div key={i} className="day" onClick={()=>handelClick()}>{i}</div>)
    }
  }
  return days
}
  return (
    <div className="calendar">
      <div className="header">
        <button onClick={lastMonth}>&lt;</button>
        <div>{ date.getFullYear() } 年 { date.getMonth() + 1 } 月</div>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
```
App.jsx代码
```javascript
import { useState } from 'react'
import './App.css'
import Calendar from './component/Calendar'
function App() {
  return (
    <>
      <h1>mini日历组件📅</h1>
      <Calendar defaultValue={'2024-07-19'} onChange={(date)=>{alert(date.toLocaleDateString())}} />
      <Calendar defaultValue={'2024-10-04'} /
    </>
  )
}

export default App
```
![bandicam-2024-07-19-00-32-19-886.gif](https://cdn.nlark.com/yuque/0/2024/gif/36013995/1721320827786-91edeadd-9b45-474c-bff9-cf048b804ddc.gif#averageHue=%23f9f9fd&clientId=ufee6c771-8e2a-4&from=paste&height=888&id=u05f55ec0&originHeight=888&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=602463&status=done&style=none&taskId=u9b56854c-60f7-4ad4-9ede-f6efd62f1c6&title=&width=1920)
以上就实现了一个mini版的日历组件😁
最后还是那句话：即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号：`小白Coding日志`，每天分享精彩内容，与你一同探寻知识的边界。一起开启知识新旅程！🚀📚
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)


