<link rel="stylesheet" type="text/css" href="./stylesheets/main.css">
<h1></h1>
<div class = "main-logo"><img src="./assets/logo2.png"></div>
<div class = "index__intro">这里是院友会秘书处办公主页</div>
                                                                                                                                           
<div class="main-adaptive-block">
  <p><div class = "text__token"><img src = "./assets/icon/rocket-takeoff.svg" alt = "icon"> 最新活动：</div></p>
  <div class = "main__container__textsub">
    <p><div class = "text__token"> 活动名称：</div><div class = "string__Data" id = "string1"></div></p>
    <p><div class = "text__token"> 活动slogan：</div><div class = "string__Data" id = "string2"></div></p>
    <p><div class = "text__token"> 活动嘉宾：</div><div class = "string__Data" id = "string3"></div></p>
    <p><div class = "text__token"> 活动时间，地点：</div><div class = "string__Data" id = "string4"></div></p>
  </div>
</div>
<div class="main-container" id = "container1">
  <div class="main-container-text" id = "container1-text1">
    <p><div class = "text__token"><img src = "./assets/icon/arrow-up-right-square.svg" alt = "icon"> 活动主页:</div></p>
    <p><div class = "text__token"><img src = "./assets/icon/person-up.svg" alt = "icon"><a href = ""> 院友专访</a></div></p>
    <p><div class = "text__token"><img src = "./assets/icon/chat-dots.svg" alt = "icon"><a href = ""> 竺林论道</a></div></p>
    <p><div class = "text__token"><a href = ""><img src = "./assets/icon/people.svg" alt = "icon"> 竺山论剑</a></div></p>
    <p><div class = "text__token"><a href = ""><img src = "./assets/icon/cup-hot.svg" alt = "icon"><a href = ""> 院友面对面</a></div></p>
    <p><div class = "text__token"><a href = ""><img src = "./assets/icon/mortarboard-fill.svg" alt = "icon"> 竺影芳华</a></div></p>
    <p><div class = "text__token"><a href = ""><img src = "./assets/icon/house-add.svg" alt = "icon"> 纳新/跨年夜</a></div></p>
  </div>
  <div class="main-container-text" id = "container1-text2">
    <p><div class = "text__token"><img src = "./assets/icon/arrow-up-right-square.svg" alt = "icon"> 快速访问：</div></p>
    <p><div class = "text__token"><a href = ""></a></div></p>
  </div>
  <div class="main-container-text-right" id = "container1-text3">
    <p><div class = "text__token"><img src = "./assets/icon/arrow-up-right-square.svg" alt = "icon"> 院友资料：</div></p>
    <p><div class = "text__token"><a href = ""></a></div></p>
  </div>
</div>
<div class="main-container" id = "container2">
  <div class="main-container-text" id = "container1-text4">
    <p><div class = "text__token"><img src = "./assets/icon/box.svg" alt = "icon"> 设计组件：</div></p>
  </div>
  <div class="main-container-text" id = "container1-text5">
    <p><div class = "text__token"><img src = "./assets/icon/arrow-up-right-square.svg" alt = "icon"> 页面管理：</div></p>
    <p><div class = "text__token"><img src = "./assets/icon/question-circle.svg" alt = "icon"><a href="https://hzeristo.github.io/SSoCKC/help/"> 使用须知</a></div></p>
    <p><div class = "text__token"><img src = "./assets/icon/terminal.svg" alt = "icon"><a href="https://hzeristo.github.io/SSoCKC/edit/"> 维护指南</a></div></p>
    <p><div class = "text__token"><img src = "./assets/icon/file-earmark.svg" alt = "icon"><a href="https://hzeristo.github.io/SSoCKC/disclaimer.html"> 免责声明</a></div></p>
    <p><div class = "text__token"><img src = "./assets/icon/info-circle.svg" alt = "icon"><a href="https://hzeristo.github.io/SSoCKC/about/"> 关于</a></div></p>
  </div>
  <div class="main-container-text-right" id = "container1-text6">
    <p><div class = "text__token"><img src = "./assets/icon/arrow-up-right-square.svg" alt = "icon"> 网址导航：</div></p>
    <p><a href="http://tzzd.zju.edu.cn/">团在浙大</a></p>
    <p><a href="https://qzonline.zju.edu.cn/hom/uni#/home">场地预约（启真平台）</a></p>
    <p><a href="http://www.youth.zju.edu.cn/sztz/">未定义链接</a></p>
    <p>　</p> <!--注意是全角空格-->
    <p>　</p>
    <p>　</p>
  </div>
</div>
<div class = "main-adaptive-block">这里是正文部分，之后会加上介绍文案</div>


??? info "页面说明"

    1. 由于Android原生webView不支持阅览pdf文件，所以目前Android端部分文件可能需要下载查看。pdf图片化正稳步推进。
    2. 目前前端不是最终版本，之后会换ui更好看，兼容多尺寸设备，夜间模式友好的版本。
    3. 目前是静态页面，**总有一天**会将页面迁移到服务器上。


<div style = "margin-top: 100px;text-align: right;font-size: 12px;" id = "version">
    <p>当前版本：0.6.0</p>
</div>

<script>  
    fetch('/currentState.json')
        .then(response => response.json())
        .then(jsonData => {
            const currentActivity = jsonData.current_activity;
            const debugText = jsonData.debug;
            const version = jsonData.version;
            document.getElementById('string1').textContent = currentActivity.name;
            document.getElementById('string2').textContent = currentActivity.slogan;
            document.getElementById('string3').textContent = currentActivity.people;
            document.getElementById('string4').textContent = currentActivity.time + "，" + currentActivity.location;
            document.getElementById('version').textContent = "当前版本：" + version;
            })
        .catch(error => console.error('Error fetching JSON file:', error));
</script>