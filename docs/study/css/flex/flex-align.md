你好，我是小白Coding日志，一个热爱技术的程序员。在这里，我分享自己在编程和技术世界中的学习心得和体会。希望我的文章能够给你带来一些灵感和帮助。欢迎来到我的博客，一起在技术的世界里探索前行吧！
#### justify-content 沿主轴分配空间
`justify-content` 属性用来设置Flex项目在主轴上的对齐方式(分配主轴容器剩余空间)
##### 属性值
| 值 | 描述 |
| --- | --- |
| flex-start | 沿着主轴起始位置对齐项目 |
| flex-end | 沿着主轴终点位置对齐项目 |
| center | 沿着主轴居中对齐项目,通常可以用来实现元素水平居中 |
| space-between | 会让主轴上第一个项目和容器起始位置对齐，最后一个项目和容器终点位置对齐，中间其他项目之间保持相等的间距 |
| space-around | 会让主轴上第一个项目和最后一个项目距离容器的开始位置和终点位置的距离是其相邻连个元素的二分之一，中间元素保持相等的距离 |
| space-evenly | 会让主轴上每一个项目之间的距离相等 |

![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709362219990-26eb681d-a87f-425a-a8fe-b26a44c8f555.png#averageHue=%23f6e5ad&clientId=u464ec4c9-acf3-4&from=paste&height=744&id=u3f50a455&originHeight=744&originWidth=563&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71052&status=done&style=none&taskId=u1402ebf1-03a4-4705-8245-b538e606fb7&title=&width=563)
#### align-content 沿侧轴分配空间
`align-content` 属性用来设置Flex项目在侧轴上的对齐方式(分配侧轴容器剩余空间)
> 注意：当只有`flex-wrap: wrap`或者`flex-wrap: wrap-reverse`的时候`align-content`的设置才有效

##### 属性值
和`justify-content`的值差不太多，但是额外多了`stretch`属性值

| 值 | 描述 |
| --- | --- |
| flex-start | 沿着侧轴起始位置对齐项目 |
| flex-end | 沿着侧轴终点位置对齐项目 |
| center | 沿着侧轴居中对齐项目,通常可以用来实现元素垂直居中 |
| space-between | 会让侧轴上第一行项目和容器起始位置对齐，最后一行项目和容器终点位置对齐，中间其他项目之间保持相等的间距 |
| space-around | 会让侧轴上第一行项目和最后一行项目距离容器的开始位置和终点位置的距离是其相邻连个元素的二分之一，中间元素保持相等的距离 |
| space-evenly | 会让侧轴上每一行项目之间的距离相等 |
| stretch | 默认值。如果项目没有设置高度元素被拉伸以适应容器 |
| start | 同flex-start |
| end | 同flex-end |

![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709366747113-28167710-c837-4f5c-b5de-a03f28114ec9.png#averageHue=%23fbeec7&clientId=udafa5d4f-f40e-4&from=paste&height=611&id=u5fcbb2f3&originHeight=611&originWidth=924&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61372&status=done&style=none&taskId=u2e449ccf-e0cd-4daf-9dc0-23955ccb938&title=&width=924)
#### 沿侧轴对齐Flex项目
> 沿侧轴对齐Flex项目指的是侧轴上单行项目或者单个项目的对齐方式，例如在一行项目不需要换行的情况下项目之间的对齐方式，或者某个项目自身的对齐。此时可以使用align-items和align-self

##### align-items 
用来设置Flex行在侧轴上的对齐方式
###### 属性值
| 值 | 描述 |
| --- | --- |
| flex-start | 沿着侧轴起始位置对齐项目 |
| flex-end | 沿着侧轴终点位置对齐项目 |
| center | 沿着侧轴中间位置对齐项目，Flex项目处于容器中心位置 |
| stretch | 默认值。如果项目没有设置高度元素被拉伸以适应容器 |
| baseline | 元素位于容器的基线上。如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。 |
| start | 同flex-start |
| end | 同flex-end |

![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709369274188-26e03633-b466-4ece-86f9-089fae06a8d6.png#averageHue=%23f7e6b1&clientId=udafa5d4f-f40e-4&from=paste&height=470&id=u5bd78519&originHeight=470&originWidth=612&originalType=binary&ratio=1&rotation=0&showTitle=false&size=41094&status=done&style=none&taskId=ua87c1090-7a7e-4fa0-a0ed-ea215a444cd&title=&width=612)
##### align-self
用来设置单个Flex项目在侧轴上的对齐方式
###### 属性值
| 值 | 描述 |
| --- | --- |
| auto | 默认值。元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。 |
| flex-start | 沿着侧轴起始位置对齐单个项目 |
| flex-end | 沿着侧轴终点位置对齐单个项目 |
| center | 沿着侧轴中间位置对齐单个项目，Flex单个项目处于容器中心位置 |
| stretch | 默认值。如果项目没有设置高度元素被拉伸以适应容器 |
| baseline | 元素位于容器的基线上。如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。 |

![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709370009721-bac66d3c-7938-46e0-87a9-1f112301f3b8.png#averageHue=%23fcf1d8&clientId=udafa5d4f-f40e-4&from=paste&height=485&id=u41c05c93&originHeight=485&originWidth=623&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43418&status=done&style=none&taskId=u1f77aeb5-9634-47be-a615-9fabf679869&title=&width=623)
最后，一个小具有趣味性的小游戏用来加深对Flex布局的理解，[小游戏](https://codepen.io/airen/full/NWMpyYd)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/36013995/1709371021229-d47c16a3-acd2-4b09-82c7-b8a1ceef5bcb.png#averageHue=%23291741&clientId=u2b116e4a-0509-4&from=paste&height=657&id=ua23791b4&originHeight=657&originWidth=1587&originalType=binary&ratio=1&rotation=0&showTitle=false&size=63328&status=done&style=none&taskId=u3fb1d3ba-d2ae-4be4-9fbe-ff5d0f8bc80&title=&width=1587)
