你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
### provide/inject 依赖注入
通常在Vue中父子组件传值使用频率较高的莫过于props的方式，但是像祖孙关系这种传值如果使用props的话就比较麻烦了，需要逐级向下传。如果层级太多的话可能会影响到其他组件，这一问题被称为“prop逐级透传”,我们在开发中应该尽量的避免这样的问题。
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1713887797182-8b3ffc94-e2f3-4a65-a166-b6d1a9fc01df.png#averageHue=%23fbf8f3&clientId=u81824fc7-b94b-4&from=paste&height=321&id=ue0728f74&originHeight=321&originWidth=649&originalType=binary&ratio=1&rotation=0&showTitle=false&size=15375&status=done&style=none&taskId=ueba90cfc-fe9a-4e55-9bc1-3379e54041f&title=&width=649)
好在provide/inject这对好兄弟可以解决这一问题，父组件会作为依赖的提供者给其所有的后代组件（不管是子组件还是孙子组件）提供依赖数据，父组件所有的后代组件不管层级多深都可以注入由父组件提供的依赖数据。
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1713887921809-96ef2f05-50fa-48ea-ad9a-e8805cc87990.png#averageHue=%23faf8f2&clientId=u81824fc7-b94b-4&from=paste&height=297&id=u49ac5338&originHeight=297&originWidth=663&originalType=binary&ratio=1&rotation=0&showTitle=false&size=15051&status=done&style=none&taskId=u833fb2ad-4c20-44a7-af12-b04ed1c231b&title=&width=663)
#### provide提供
```vue
<script setup>
import { provide } from 'vue'
provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
</script>
```
#### inject注入
```vue
<script setup>
import { inject } from 'vue'
const message = inject('message')
</script>
```
### 替代Vuex
在大型项目的开发中往往少不了使用Vuex来集中做组件的状态管理，它专门为Vue而生，例如跨组件通信、全局数据维护这样的需求，但是相对而言Vuex的使用成本还是蛮高的。本文的主要目的是探索provide/inject来实现类似Vuex的功能，并不能完全替代Vuex，想以更低的成本来实现我们的需求。
在Vue项目中都会有一个App.vue的根组件，我们就是在这里面做文章。在整个Vue项目中，App.vue是所有组件的根组件，我看可以在这里面对外提供一些全局变量、方法、计算属性，在所有的后代组件中都可以通过inject注入来使用这些变量、方法、计算属性。
App.vue，部分代码省略
```vue
<script setup>
import { ref, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const mesText = ref('You did it!!!')
provide('message', mesText)
</script>
```
HelloWorld.vue，部分代码省略
```vue
<script setup>
import { ref, inject } from 'vue'
const message = inject('message')
</script>
```
例如，我们需要将用户登陆后的信息保存起来
App.vue，部分代码省略
```vue
<script setup>
import { ref, provide, onMounted } from 'vue'
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'
const mesText = ref('You did it!!!')
// 获取用户信息后赋值给userInfo
const userInfo = ref({})
const getUserInfo = () =>{
  axios.get('/user/info')
  .then((response)=> {
    userInfo.value = response.data
  })
}
onMounted(()=>{
  getUserInfo()
})
provide('message', mesText)
provide('userInfo', { userInfo: userInfo.value, getUserInfo(){return getUserInfo()} })
</script>
```
在需要的组件中注入App.vue中的方法，修改用户信息后重新获取`getUserInfo`
HelloWorld.vue，部分代码省略
```vue
<script setup>
import { ref, inject } from 'vue'
const message = inject('message')
const {userInfo, getUserInfo} = inject('userInfo')
// 修改用户信息后重新获取数据
const changeUserInfo = () =>{
  axios.get('/user/update')
  .then((response)=> {
    getUserInfo()
  })
}
</script>
```
将一些全局的状态放到App.vue中操作相比Vuex的复杂配置的确简单了许多，现在就可以通过provide/inject来实现了。如果你想确保提供的数据不能被注入方的组件更改，你可以使用 [readonly()](https://cn.vuejs.org/api/reactivity-core.html#readonly) 来包装提供的值。
```vue
<script setup>
import { ref, provide, readonly } from 'vue'

const count = ref(0)
provide('message', readonly(count))
</script>
```
### 注意点

1. 尽量将响应式状态的修改放到依赖的提供方的组件中，说人话就是子组件尽量不要去修改父组件中的数据，而是通过父组件去修改。父组件可以提供一个修改方法来修改数据。
2. 如果是大型项目，需要多人协同开发时，在 app.vue 里会写非常多的代码，多到结构复杂难以维护。这时可以将不同的逻辑分开到不同的 js 文件里。
### 结语
最后还是那句话：即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)

