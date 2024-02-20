你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
在实际的应用开发中，涉及用户登录验证、密码重置等场景时，通常需要前端实现发送短信验证码的功能，以提升用户体验和安全性。这个过程涉及与后端的协同配合，通过调用短信网关或短信服务接口，将验证码发送至用户手机。以下是一个简单的前端实现，演示了如何在用户点击发送验证码按钮时触发短信验证码的发送，并开始一个倒计时。
#### 功能分析
**遇事先认真分析是我今年在工作上的要求之一**
将目标分解为小模块后再逐步完成。首先，我们需要一个手机号码输入框，并对输入的手机号码进行合法性校验。其次，需要一个验证码输入框，以及一个获取短信验证码的按钮。点击该按钮将向服务端发送获取请求，参数为输入的手机号码，并开始显示倒计时，倒计时结束后重新显示获取验证码按钮。服务端收到请求后会给该手机号码发送短信验证码，然后我们输入收到的验证码即可进行下一步操作。
项目使用vue3+vite+ElementPlus，这里假设你已经搭建好项目了！
#### 页面实现
```html
<el-form :model="form" label-width="120px">
  <el-form-item label="手机号码：">
    <el-input v-model="form.name" />
  </el-form-item>
  <el-form-item label="验证码：">
    <el-input v-model="form.code" >
      <template #suffix>
        <div v-if="messageCodeVis" class="second-text">{{countdown}}秒后重新获取</div>
        <el-button v-else type="primary" link @click="sendCode">获取验证码</el-button>
      </template>
    </el-input>
  </el-form-item>
</el-form>  
<el-button type="primary">确定</el-button>
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1707292910364-0266605a-28a6-4e61-a1cc-55e09e1b8797.png#averageHue=%23fefefd&clientId=u0ea00467-ee88-4&from=paste&height=417&id=ube89858a&originHeight=417&originWidth=650&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14439&status=done&style=none&taskId=u9553a406-bc80-4455-a098-ac2cba20dae&title=&width=650)
#### 实现倒计时
点击获取验证码按钮将触发 `**sendCode**` 函数，开始倒计时，并隐藏获取按钮，显示倒计时的秒数，倒计时结束后会重新显示获取按钮。你可以通过修改 `**countdown**` 变量的值来指定倒计时的总秒数。 `**startCountdown**` 函数是整个功能的核心是直接可以拿来用的。最后在点击发送按钮的时候对手机号码输入框中的号码做一个校验。
```javascript
const sendCode = () =>{
  const reg = /^1[3456789]\d{9}$/;
  if (!reg.test(form.value.phone)) return
  if(!form.value.phone) return ElMessage.error('请输入手机号码')
  countdown.value = 60
  messageCodeVis.value = true
  startCountdown()
}
/* 倒计时函数 */
const startCountdown = () => {
  const intervalId = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(intervalId)
      messageCodeVis.value = false
    }
  }, 1000)
}
```
#### 全部代码
```vue
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
const form = ref({
  phone: '',
  code: ''
})
const messageCodeVis = ref(false)
let countdown = ref(0)
const sendCode = () =>{
  const reg = /^1[3456789]\d{9}$/;
  if(!form.value.phone) return ElMessage.error('请输入手机号码')
  if (!reg.test(form.value.phone)) return
  countdown.value = 60
  messageCodeVis.value = true
  startCountdown()
}
/* 倒计时 */
const startCountdown = () => {
    const intervalId = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            clearInterval(intervalId)
            messageCodeVis.value = false
        }
    }, 1000)
}
const rulesForm = {
  phone: [
  { required: true, message: '请输入手机号码', trigger: 'blur' },
  { pattern: /^1[3456789]\d{9}$/, message: '请输入有效的手机号码', trigger: 'blur' }
  ]
}
</script>

<template>
    <el-form :model="form" :rules="rulesForm" label-width="120px">
      <el-form-item label="手机号码：" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="验证码：">
        <el-input v-model="form.code" >
          <template #suffix>
            <div v-if="messageCodeVis" class="second-text">{{countdown}}秒后重新获取</div>
            <el-button v-else type="primary" link @click="sendCode">获取验证码</el-button>
          </template>
        </el-input>
      </el-form-item>
    </el-form>  
  <el-button type="primary">确定</el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.second-text {
  color: #e60707;
}
</style>
```
即使代码逻辑很简单，也值得记录下来。我的编程目标是避免重复造轮子！😊
祝小伙伴们新年快乐!🐉龙年大吉！
推荐一个AI生成红包封面的工具：[https://github.com/all-in-aigc/aicover](https://github.com/all-in-aigc/aicover) 
在线demo: [https://aicover.design](https://aicover.design/)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1707293811543-825b772a-b3e1-4efc-a094-274d39f1af11.png#averageHue=%23f1dad3&clientId=u0ea00467-ee88-4&from=paste&height=779&id=ud48470ef&originHeight=779&originWidth=986&originalType=binary&ratio=1&rotation=0&showTitle=false&size=565662&status=done&style=none&taskId=u0fc8c101-4c84-4b8b-947c-c9e9aa3927f&title=&width=986)
有需要的小伙伴自己上手体验一下吧!
如果觉得有用，就给我点个赞吧😁
探索更多有趣知识，欢迎关注我的微信公众号！每天分享精彩内容，与你一同探寻知识的边界。扫码即可订阅，一起开启知识新旅程！🚀📚
![qrcode_for_gh_bd5bafbcdd40_258.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/36013995/1705556124681-b339e93e-c46c-41e7-9922-b49c58aeff21.jpeg#averageHue=%23a09f9f&clientId=u38add42d-4de3-4&from=ui&id=A3aMy&originHeight=258&originWidth=258&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26790&status=done&style=none&taskId=u7f558f04-96e1-43f7-8d4c-70f1b40b037&title=)
关注我的技术博客，探索前沿科技与实用开发技巧。一起携手走向代码的精彩世界！🚀💻 不错过每一篇精彩！
> [https://www.xiaobaicoding.com](https://www.xiaobaicoding.com/)


