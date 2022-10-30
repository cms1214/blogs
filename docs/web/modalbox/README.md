# 模态框

## 安装

### 直接用 `<script>` 引入
直接下载和使用 `<link>`和`<script>` 标签引入，使用最新版本：
>css & js

[modalbox.css](http://cms1214.xyz/dist/css/modalbox.css "模态框css")
[modalbox.js](http://cms1214.xyz/dist/js/modalbox.js "模态框js")

### 链接

``` html
<link rel="stylesheet" href="http://cms1214.xyz/dist/css/modalbox.css">
```

``` html
<script src="http://cms1214.xyz/dist/js/modalbox.js"></script>
```

## 快速上手
### 创建一个 ModalBox 实例
``` js
const box = new ModalBox({
    // 选项
})
```

### 绑定`html`标签
`<button id="open">打开</button>`
``` js
new ModalBox({
    el: '#open'
})
```

::: tip
到这一步时,已经可以点击按钮打开模态框了，为默认状态
:::

## 配置

### 模态框的标题与内容
``` js
new ModalBox({
    el: '#open',
    title:'自定义标题',
    content:'自定义内容'
})
```

### 自定义模态框按钮
>添加buttons，配置一个name为“确定”的按钮
``` js
new ModalBox({
    el:'.open',
    title:'这个是标题',
    content:'这个是内容',
    buttons:{
        b1:{
            name:"确定"
        }
    }
})
```

### 更多可选自定义项
>自定义按钮名称，背景颜色，调用函数
``` js
new ModalBox({
    el:'.open',
    title:'这个是标题',
    content:'这个是内容',
    buttons:{
        b1:{
            name:"确定",
            bgColor:"#007bff",
            func(){
                console.log("点击了确定按钮");
            }
        }
    }
})
```

### 多个按钮
``` js
new ModalBox({
    el:'.open',
    title:'这个是标题',
    content:'这个是内容',
    buttons:{
        b1:{
            name:"取消",
            func(){
                console.log("点击了取消按钮");
            }
        },
        b2:{
            name:"确定",
            bgColor:"#007bff",
            func(){
                console.log("点击了确定按钮");
            }
        }
    }
})
```