# 缓冲动画

## HTML

::: tip
此时笨比唐自豪在第一节课并不知道何为封装，只模糊的晓得一些概念
:::

根据以往的经验，只需要把创建dom元素，css和逻辑代码全部写进一个js文件里面，新建一个html，再引入这个js，功能就理所应当的实现啦！

``` html
<body>
    <button class="on-load" >开始加载</button>
    <button class="stop-on-load">停止加载</button>
    
    <script src="./js/onLoad.js"></script>
</body>
```

::: tip
然而他狂妄地认为老师布置的作业样式很简单，于是花了大半儿的精力去死磕动画
:::

动画确实搞了很久，最终经历了三版，终于改出了稍微满意的效果。

![演示动画](/images/web/loading.gif)

## JS

代码如下：
``` js
function onLoad(stopTime,rotateSpeed,timer,c1,c2,c3,c4){
    if(document.querySelector(".onload")!=null) return;
    // 创建元素
    var main = document.createElement("div")
    var mainCube = document.createElement("div")

    // 添加元素
    document.body.prepend(main)
    main.appendChild(mainCube)

    // 设置类名与css
    main.setAttribute("class","onload")
    mainCube.setAttribute("class","onload-center")
    main.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    mainCube.style.cssText = `
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        height: 100px;
        width: 100px;
    `

    var color = [c1,c2,c3,c4]
    for(var i=0; i<4; i++){ // 四个span
        var cube = document.createElement("span")
        mainCube.appendChild(cube)
        cube.style.cssText = `
            height: 45px;
            width: 45px;
            transition: 2s;
            border-radius: 5px;
            background-color: ${color[i]};
        `
    }


    // 旋转
    var rotate = 0
    setInterval(function(){
        rotate+=rotateSpeed;
        mainCube.style.setProperty("rotate",rotate+'deg')
    },10)

    // 变化
    var cubes = mainCube.children
    cubes[0].style.transform = "scale("+1+")"
    cubes[1].style.transform = "scale("+0.8+")"
    cubes[2].style.transform = "scale("+0.8+")"
    cubes[3].style.transform = "scale("+0.6+")"


    var timer1,timer2;
    function t1(){
        cubes[0].style.transform = "scale("+0.6+")"
        cubes[3].style.transform = "scale("+1+")"
        timer2=setTimeout(t2,timer);
    }
    function t2(){
        cubes[0].style.transform = "scale("+1+")"
        cubes[3].style.transform = "scale("+0.6+")"
        timer1=setTimeout(t1,timer);
    }
    timer1=setTimeout(t1,1);


    var timer3,timer4;
    var waitTime = timer/2
    function t3(){
        cubes[1].style.transform = "scale("+0.6+")"
        cubes[2].style.transform = "scale("+1+")"
        timer4=setTimeout(t4,timer);
    }
    function t4(){
        cubes[1].style.transform = "scale("+1+")"
        cubes[2].style.transform = "scale("+0.6+")"
        timer3=setTimeout(t3,timer);
    }
    setTimeout(function(){
        timer3=setTimeout(t3,1);
    },waitTime)


    setTimeout(function(){
        stopOnLoad()
    },stopTime)
}



// 停止加载
function stopOnLoad(){
    if(document.querySelector(".onload")==null) return;
    document.getElementsByClassName("onload")[0].remove()
    for(i=1;i<=100;i++){
        clearInterval(i);
        clearTimeout(i)
    }
}

// 默认主题
function defaultLoad(){
    onLoad(5000,0.3,1500,"#919e8c","#d87d7c","#d6ab81","#6f7073")
}


// 类名
var onloadC = document.getElementsByClassName("on-load")
onloadC[0].onclick = function(){defaultLoad()}

var stopOnloadC = document.getElementsByClassName("stop-on-load")
stopOnloadC[0].onclick = function(){stopOnLoad()}


document.body.style.backgroundColor = "#fff8ee"
```

如你所见，css也被塞了进去，和dom操作挤成一坨。这并不是真正意义上的封装，改变出现在几节课后。